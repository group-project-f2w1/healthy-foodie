/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 80,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: david@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject10 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject10
 * @version 1.0
 */
class InlineObject10 {
    /**
     * Constructs a new <code>InlineObject10</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject10
     * @param username {String} The username.
     * @param id {Number} The shopping list item id.
     * @param hash {String} The private hash for the username.
     */
    constructor(username, id, hash) { 
        
        InlineObject10.initialize(this, username, id, hash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, id, hash) { 
        obj['username'] = username;
        obj['id'] = id;
        obj['hash'] = hash;
    }

    /**
     * Constructs a <code>InlineObject10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject10} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject10} The populated <code>InlineObject10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject10();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The username.
 * @member {String} username
 */
InlineObject10.prototype['username'] = undefined;

/**
 * The shopping list item id.
 * @member {Number} id
 */
InlineObject10.prototype['id'] = undefined;

/**
 * The private hash for the username.
 * @member {String} hash
 */
InlineObject10.prototype['hash'] = undefined;






export default InlineObject10;

