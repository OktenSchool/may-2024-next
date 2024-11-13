import React from 'react';
import {getMeals} from "@/db/db";
import FormComponent from "@/app/components/FormComponent";

const MealsPage = async () => {

    const meals = await getMeals();
    return (
        <div>

            <FormComponent/>
            {
                meals.map((meal) => (<div key={meal.id}>{meal.title}</div>))

            }
        </div>
    );
};

export default MealsPage;
