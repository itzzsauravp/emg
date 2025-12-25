/*
    modules that can be generated:
    controller => c
    routes => r
    middleware => m
    errors => e
    services => s
  */
export type TModulestoGenerate =
  | "controller"
  | "middleware"
  | "routes"
  | "errors"
  | "services";
