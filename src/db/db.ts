'use server';
import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db');

const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[];
}

const addMeal = async (formData: FormData): Promise<void> => {
    db.prepare(`
        insert into meals (slug, title, image, summary, instructions, creator, creator_email)
        values (?, ?, ?, ?, ?, ?, ?)
    `)
        .run(formData.get('slug'), formData.get('title'), formData.get('image'), formData.get('summary'), formData.get('instructions'), formData.get('creator'), formData.get('creator_email'));

    revalidatePath('meals');

}

export {
    getMeals,
    addMeal
}
