export default class IngredientRepository {
    public static getAll = () => {
        let idCount = 1;
        
        return [
            { name: "Яблоко", id: idCount++ },
            { name: "Апельсин", id: idCount++ },
            { name: "Чеснок", id: idCount++ },
            { name: "Молоко", id: idCount++ }
        ];
    }
}
