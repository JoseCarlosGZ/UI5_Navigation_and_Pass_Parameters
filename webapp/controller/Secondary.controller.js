sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController"

],
    function (BaseController) {
        "use strict";
        return BaseController.extend("josecarlosgz.navigation.controller.Secondary", {
            onInit: function () {

            },
            onNavBack: function () {
                this.navBack();
            },
            //Para navegar de la vista Main a la Secundary hemos puesto la función a saco, pero en realidad se hace como lo estamos haciendo aquí, es decir, en el BaseController creamos la función getRouter con parte de la ruta y aquí completamos:
            navToTertiaryView: function () {
                this.getRouter().navTo("aliasName_Tertiary");
            }

        });
    });
