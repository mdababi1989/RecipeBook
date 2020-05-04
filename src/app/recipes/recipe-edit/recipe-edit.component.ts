import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../recipe.model';
import * as fromRecipes from '../store/recipes.reducers';
import {Store} from '@ngrx/store';
import * as RecipesActions from '../store/recipes.actions';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<fromRecipes.FeatureState>) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      this.store.select('recipes')
        .pipe(take(1))
        .subscribe((recipesState: fromRecipes.State) => {
          const recipe = recipesState.recipes[this.id];
          recipeName = recipe.name;
          recipeDescription = recipe.description;
          recipeImagePath = recipe.imagePath;
          if (recipe.ingredients) {
            for (const ingredient of recipe.ingredients) {
              recipeIngredients.push(new FormGroup({
                name: new FormControl(ingredient.name, Validators.required),
                amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              }));
            }
          }
        });
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      path: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients
    });
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit() {
    const value = this.recipeForm.value;
    const recipe = new Recipe(value.name, value.description, value.path, value.ingredients);
    if (this.editMode) {
      this.store.dispatch(
        new RecipesActions.UpdateRecipe( {updatedRecipe: recipe, index: this.id}));
    } else {
      this.store.dispatch(new RecipesActions.AddRecipe(recipe));
    }
    this.router.navigate(['/recipes']);
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onCancel() {
    this.router.navigate(['/recipes']);
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
