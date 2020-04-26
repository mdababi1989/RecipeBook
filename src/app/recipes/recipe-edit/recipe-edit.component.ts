import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipeService/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.recipe = this.recipeService.getRecipe(this.id);
      }
      this.initForm();

    });
  }

  private initForm() {
    const recipeName = this.editMode ? this.recipe.name : '';
    const recipeDescription = this.editMode ? this.recipe.description : '';
    const recipeImagePath = this.editMode ? this.recipe.imagePath : '';
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      path: new FormControl(recipeImagePath, Validators.required)
    });
  }

  onSubmit() {
    const value = this.recipeForm.value;
    const recipe = new Recipe(value.name, value.description, value.path, []);
    this.recipeService.addRecipe(recipe);
    this.recipeForm.reset();
  }
}
