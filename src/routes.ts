import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/identification",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/identification/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/identification",
    controller: UserController,
    action: "save"
},
    , {
    method: "put",
    route: "/identification/:id",
    controller: UserController,
    action: "put"
}, {
    method: "delete",
    route: "/identification/:id",
    controller: UserController,
    action: "remove"
}]