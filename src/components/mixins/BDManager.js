/**
 * Filename: BDManager.js
 * Author: Luis Antonio Montoya Morales
 * Description: BDManager behavior template, provides a data management interface.
 */

import { LitElement } from "lit"
import { PRODUCTS, PRODUCTPACKAGES, ORDERS, TRUCKS } from "../../shared/constants.d.js";

const BDManager = Superclass => class extends Superclass{
    static get properties(){
        return {
            _data: Object
        }
    }

    constructor(){
        super();
        this._data = {
            "productos": [],
            "orders": [],
            "trucks": []
        }
        this._loadOrInitializeDB("productos");
        this._loadOrInitializeDB("orders");
        this._loadOrInitializeDB("trucks");
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("add-or-modify", this._handleAddOrModify);
        this.addEventListener("remove", this._handleRemove);
    }

    _handleAddOrModify(e){

    }

    _handleRemove(e){

    }

    _loadOrInitializeDB(DBName){
        const rawData = window.localStorage.getItem(DBName);
        if(!rawData){
            this._data[DBName] = this._getDefaultDatabase(DBName);
            this._saveChanges(DBName, this._data[DBName]);
            return;
        }
        this._data[DBName] = JSON.parse(rawData);
    }

    _getDefaultDatabase(DBName){
        switch(DBName){
            case "productos":
                return PRODUCTS;
            case "orders":
                return ORDERS
            case "trucks":
                return TRUCKS;
        }
    }

    _saveProducts(){
        this._saveChanges("productos", this._data.products);
    }

    _saveOrders(){
        this._saveChanges("orders", this._data.orders);
    }

    _saveTrucks(){
        this._saveChanges("trucks", this._data.orders);
    }

    _saveChanges(DBName, data){
        window.localStorage.setItem(DBName, JSON.stringify(data));
    }

    _findIn(table_name, id){
        return this._data[table_name].find(element => element.id === id);
    }
}

export default BDManager(LitElement);