sap.ui.define([
    "josecarlosgz/navigation/controller/BaseController", 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("josecarlosgz.navigation.controller.Tertiary", {
            onInit: function () {

            },
            onNavBack: function () {
                this.navBack();
            }
        });
    });
