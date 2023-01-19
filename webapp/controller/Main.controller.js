sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController"
],
    /**
     * @param {typeof josecarlosgz.navigation.controller.BaseController} BaseController
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("josecarlosgz.navigation.controller.Main", {
            onInit: function () {

            },
            navToSecondaryView: function () {
                sap.ui.core.UIComponent.getRouterFor(this).navTo(
                                                                    "aliasName_Secondary",
                                                                    {
                                                                        "parametro01": "manzanas",
                                                                        "parametro02": "naranjas"
                                                                    }
                                                                );
            }
        });
    });
