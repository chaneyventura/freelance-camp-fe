"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "description",
                file_url: 'http://google.com',
                updated_at: '03/02/2017',
                image_url: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/581802_611403818872286_1518120101_n.jpg?oh=4d826f87de92653d828ec9ddd7c20201&oe=596AA638',
            },
            {
                title: "My Second Doc",
                description: "description",
                file_url: 'http://google.com',
                updated_at: '03/02/2017',
                image_url: 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/16487094_10155056568179588_7206370815830926266_o.jpg?oh=243ab5fc5d2a2b77bf98382886ee9274&oe=5932CE1F',
            },
            {
                title: "My Last Doc",
                description: "description",
                file_url: 'http://google.com',
                updated_at: '03/02/2017',
                image_url: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/15590528_361653157541816_2976226373541435899_n.png?oh=8edc05497ca69f8ef0a0529dcb14102f&oe=59686580',
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map