import todoInterface from "../interface/TodoInterface";

type AddProductAction = {
    type: "ADD_PRODUCT";
    payload: {title:todoInterface["title"];}
};

type CompleteActivity = {
    type:  "COMPLETE_ACTIVITY";
    payload: {
        id: todoInterface["id"],
        completed: todoInterface["completed"]
    };
};

type DiscountProductAction = {
    type: "REMOVE_PRODUCT";
    payload: {
        id: todoInterface["id"];
    };
};

type CleanAction = {
    type: "REMOVE_ALL_COMPLETED";
};

export type TodoReducerActions =
    | AddProductAction
    | DiscountProductAction
    | CompleteActivity
    | CleanAction;
