(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS((exports, module) => {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS((exports, module) => {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS((exports, module) => {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS((exports, module) => {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS((exports, module) => {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS((exports, module) => {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS((exports, module) => {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS((exports, module) => {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS((exports, module) => {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS((exports, module) => {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS((exports, module) => {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS((exports, module) => {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS((exports, module) => {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS((exports, module) => {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS((exports, module) => {
    var root = require_root();
    var Symbol = root.Symbol;
    module.exports = Symbol;
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS((exports, module) => {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS((exports, module) => {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS((exports, module) => {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS((exports, module) => {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS((exports, module) => {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS((exports, module) => {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS((exports, module) => {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS((exports, module) => {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module.exports = Map;
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS((exports, module) => {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS((exports, module) => {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS((exports, module) => {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS((exports, module) => {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS((exports, module) => {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS((exports, module) => {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS((exports, module) => {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
      };
    }
    module.exports = mapCacheClear;
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS((exports, module) => {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS((exports, module) => {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS((exports, module) => {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS((exports, module) => {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS((exports, module) => {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS((exports, module) => {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS((exports, module) => {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS((exports, module) => {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS((exports, module) => {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS((exports, module) => {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS((exports, module) => {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS((exports, module) => {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  });

  // node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS((exports, module) => {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS((exports, module) => {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS((exports, module) => {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS((exports, module) => {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS((exports, module) => {
    var isArray = Array.isArray;
    module.exports = isArray;
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS((exports, module) => {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS((exports, module) => {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS((exports, module) => {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS((exports, module) => {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS((exports, module) => {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS((exports, module) => {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS((exports, module) => {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS((exports, module) => {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS((exports, module) => {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS((exports, module) => {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS((exports, module) => {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS((exports, module) => {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS((exports, module) => {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS((exports, module) => {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  });

  // node_modules/lodash/_baseAssign.js
  var require_baseAssign = __commonJS((exports, module) => {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS((exports, module) => {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS((exports, module) => {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS((exports, module) => {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  });

  // node_modules/lodash/_baseAssignIn.js
  var require_baseAssignIn = __commonJS((exports, module) => {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  });

  // node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS((exports, module) => {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS((exports, module) => {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS((exports, module) => {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS((exports, module) => {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS((exports, module) => {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  });

  // node_modules/lodash/_copySymbols.js
  var require_copySymbols = __commonJS((exports, module) => {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS((exports, module) => {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS((exports, module) => {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS((exports, module) => {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  });

  // node_modules/lodash/_copySymbolsIn.js
  var require_copySymbolsIn = __commonJS((exports, module) => {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS((exports, module) => {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS((exports, module) => {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS((exports, module) => {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module.exports = Set;
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS((exports, module) => {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS((exports, module) => {
    var DataView = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  });

  // node_modules/lodash/_initCloneArray.js
  var require_initCloneArray = __commonJS((exports, module) => {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS((exports, module) => {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  });

  // node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS((exports, module) => {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  });

  // node_modules/lodash/_cloneDataView.js
  var require_cloneDataView = __commonJS((exports, module) => {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  });

  // node_modules/lodash/_cloneRegExp.js
  var require_cloneRegExp = __commonJS((exports, module) => {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  });

  // node_modules/lodash/_cloneSymbol.js
  var require_cloneSymbol = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  });

  // node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS((exports, module) => {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  });

  // node_modules/lodash/_initCloneByTag.js
  var require_initCloneByTag = __commonJS((exports, module) => {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS((exports, module) => {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  });

  // node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS((exports, module) => {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  });

  // node_modules/lodash/_baseIsMap.js
  var require_baseIsMap = __commonJS((exports, module) => {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  });

  // node_modules/lodash/isMap.js
  var require_isMap = __commonJS((exports, module) => {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  });

  // node_modules/lodash/_baseIsSet.js
  var require_baseIsSet = __commonJS((exports, module) => {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  });

  // node_modules/lodash/isSet.js
  var require_isSet = __commonJS((exports, module) => {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  });

  // node_modules/lodash/_baseClone.js
  var require_baseClone = __commonJS((exports, module) => {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  });

  // node_modules/lodash/clone.js
  var require_clone = __commonJS((exports, module) => {
    var baseClone = require_baseClone();
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    module.exports = clone;
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS((exports, module) => {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS((exports, module) => {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS((exports, module) => {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS((exports, module) => {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS((exports, module) => {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS((exports, module) => {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS((exports, module) => {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS((exports, module) => {
    var identity = require_identity();
    function castFunction(value) {
      return typeof value == "function" ? value : identity;
    }
    module.exports = castFunction;
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS((exports, module) => {
    var arrayEach = require_arrayEach();
    var baseEach = require_baseEach();
    var castFunction = require_castFunction();
    var isArray = require_isArray();
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, castFunction(iteratee));
    }
    module.exports = forEach;
  });

  // node_modules/lodash/each.js
  var require_each = __commonJS((exports, module) => {
    module.exports = require_forEach();
  });

  // node_modules/lodash/_baseFilter.js
  var require_baseFilter = __commonJS((exports, module) => {
    var baseEach = require_baseEach();
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection2) {
        if (predicate(value, index, collection2)) {
          result.push(value);
        }
      });
      return result;
    }
    module.exports = baseFilter;
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS((exports, module) => {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS((exports, module) => {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS((exports, module) => {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS((exports, module) => {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS((exports, module) => {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS((exports, module) => {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS((exports, module) => {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS((exports, module) => {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS((exports, module) => {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS((exports, module) => {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS((exports, module) => {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS((exports, module) => {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS((exports, module) => {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS((exports, module) => {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS((exports, module) => {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS((exports, module) => {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS((exports, module) => {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS((exports, module) => {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS((exports, module) => {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS((exports, module) => {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS((exports, module) => {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS((exports, module) => {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS((exports, module) => {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS((exports, module) => {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS((exports, module) => {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS((exports, module) => {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS((exports, module) => {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS((exports, module) => {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS((exports, module) => {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS((exports, module) => {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS((exports, module) => {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS((exports, module) => {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS((exports, module) => {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS((exports, module) => {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  });

  // node_modules/lodash/filter.js
  var require_filter = __commonJS((exports, module) => {
    var arrayFilter = require_arrayFilter();
    var baseFilter = require_baseFilter();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = filter;
  });

  // node_modules/lodash/_baseHas.js
  var require_baseHas = __commonJS((exports, module) => {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }
    module.exports = baseHas;
  });

  // node_modules/lodash/has.js
  var require_has = __commonJS((exports, module) => {
    var baseHas = require_baseHas();
    var hasPath = require_hasPath();
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    module.exports = has;
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS((exports, module) => {
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLike = require_isArrayLike();
    var isBuffer = require_isBuffer();
    var isPrototype = require_isPrototype();
    var isTypedArray = require_isTypedArray();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }
    module.exports = isEmpty;
  });

  // node_modules/lodash/isUndefined.js
  var require_isUndefined = __commonJS((exports, module) => {
    function isUndefined(value) {
      return value === void 0;
    }
    module.exports = isUndefined;
  });

  // node_modules/lodash/_baseMap.js
  var require_baseMap = __commonJS((exports, module) => {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  });

  // node_modules/lodash/map.js
  var require_map = __commonJS((exports, module) => {
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var isArray = require_isArray();
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    module.exports = map;
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS((exports, module) => {
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    module.exports = arrayReduce;
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS((exports, module) => {
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    module.exports = baseReduce;
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS((exports, module) => {
    var arrayReduce = require_arrayReduce();
    var baseEach = require_baseEach();
    var baseIteratee = require_baseIteratee();
    var baseReduce = require_baseReduce();
    var isArray = require_isArray();
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
      return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }
    module.exports = reduce;
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS((exports, module) => {
    var baseProperty = require_baseProperty();
    var asciiSize = baseProperty("length");
    module.exports = asciiSize;
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS((exports, module) => {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS((exports, module) => {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    module.exports = unicodeSize;
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS((exports, module) => {
    var asciiSize = require_asciiSize();
    var hasUnicode = require_hasUnicode();
    var unicodeSize = require_unicodeSize();
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    module.exports = stringSize;
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS((exports, module) => {
    var baseKeys = require_baseKeys();
    var getTag = require_getTag();
    var isArrayLike = require_isArrayLike();
    var isString = require_isString();
    var stringSize = require_stringSize();
    var mapTag = "[object Map]";
    var setTag = "[object Set]";
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }
    module.exports = size;
  });

  // node_modules/lodash/transform.js
  var require_transform = __commonJS((exports, module) => {
    var arrayEach = require_arrayEach();
    var baseCreate = require_baseCreate();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    var getPrototype = require_getPrototype();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isTypedArray = require_isTypedArray();
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
      iteratee = baseIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor() : [];
        } else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        } else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
        return iteratee(accumulator, value, index, object2);
      });
      return accumulator;
    }
    module.exports = transform;
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS((exports, module) => {
    var Symbol = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS((exports, module) => {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS((exports, module) => {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS((exports, module) => {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS((exports, module) => {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        configurable: true,
        enumerable: false,
        value: constant(string),
        writable: true
      });
    };
    module.exports = baseSetToString;
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS((exports, module) => {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS((exports, module) => {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  });

  // node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS((exports, module) => {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module.exports = baseRest;
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS((exports, module) => {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  });

  // node_modules/lodash/_baseIsNaN.js
  var require_baseIsNaN = __commonJS((exports, module) => {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  });

  // node_modules/lodash/_strictIndexOf.js
  var require_strictIndexOf = __commonJS((exports, module) => {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  });

  // node_modules/lodash/_baseIndexOf.js
  var require_baseIndexOf = __commonJS((exports, module) => {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  });

  // node_modules/lodash/_arrayIncludes.js
  var require_arrayIncludes = __commonJS((exports, module) => {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  });

  // node_modules/lodash/_arrayIncludesWith.js
  var require_arrayIncludesWith = __commonJS((exports, module) => {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS((exports, module) => {
    function noop() {
    }
    module.exports = noop;
  });

  // node_modules/lodash/_createSet.js
  var require_createSet = __commonJS((exports, module) => {
    var Set = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    module.exports = createSet;
  });

  // node_modules/lodash/_baseUniq.js
  var require_baseUniq = __commonJS((exports, module) => {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  });

  // node_modules/lodash/isArrayLikeObject.js
  var require_isArrayLikeObject = __commonJS((exports, module) => {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module.exports = isArrayLikeObject;
  });

  // node_modules/lodash/union.js
  var require_union = __commonJS((exports, module) => {
    var baseFlatten = require_baseFlatten();
    var baseRest = require_baseRest();
    var baseUniq = require_baseUniq();
    var isArrayLikeObject = require_isArrayLikeObject();
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });
    module.exports = union;
  });

  // node_modules/lodash/_baseValues.js
  var require_baseValues = __commonJS((exports, module) => {
    var arrayMap = require_arrayMap();
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    module.exports = baseValues;
  });

  // node_modules/lodash/values.js
  var require_values = __commonJS((exports, module) => {
    var baseValues = require_baseValues();
    var keys = require_keys();
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    module.exports = values;
  });

  // node_modules/graphlib/lib/lodash.js
  var require_lodash = __commonJS((exports, module) => {
    var lodash;
    if (true) {
      try {
        lodash = {
          clone: require_clone(),
          constant: require_constant(),
          each: require_each(),
          filter: require_filter(),
          has: require_has(),
          isArray: require_isArray(),
          isEmpty: require_isEmpty(),
          isFunction: require_isFunction(),
          isUndefined: require_isUndefined(),
          keys: require_keys(),
          map: require_map(),
          reduce: require_reduce(),
          size: require_size(),
          transform: require_transform(),
          union: require_union(),
          values: require_values()
        };
      } catch (e) {
      }
    }
    if (!lodash) {
      lodash = window._;
    }
    module.exports = lodash;
  });

  // node_modules/graphlib/lib/graph.js
  var require_graph = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash();
    module.exports = Graph;
    var DEFAULT_EDGE_NAME = "\0";
    var GRAPH_NODE = "\0";
    var EDGE_KEY_DELIM = "";
    function Graph(opts) {
      this._isDirected = _.has(opts, "directed") ? opts.directed : true;
      this._isMultigraph = _.has(opts, "multigraph") ? opts.multigraph : false;
      this._isCompound = _.has(opts, "compound") ? opts.compound : false;
      this._label = void 0;
      this._defaultNodeLabelFn = _.constant(void 0);
      this._defaultEdgeLabelFn = _.constant(void 0);
      this._nodes = {};
      if (this._isCompound) {
        this._parent = {};
        this._children = {};
        this._children[GRAPH_NODE] = {};
      }
      this._in = {};
      this._preds = {};
      this._out = {};
      this._sucs = {};
      this._edgeObjs = {};
      this._edgeLabels = {};
    }
    Graph.prototype._nodeCount = 0;
    Graph.prototype._edgeCount = 0;
    Graph.prototype.isDirected = function() {
      return this._isDirected;
    };
    Graph.prototype.isMultigraph = function() {
      return this._isMultigraph;
    };
    Graph.prototype.isCompound = function() {
      return this._isCompound;
    };
    Graph.prototype.setGraph = function(label) {
      this._label = label;
      return this;
    };
    Graph.prototype.graph = function() {
      return this._label;
    };
    Graph.prototype.setDefaultNodeLabel = function(newDefault) {
      if (!_.isFunction(newDefault)) {
        newDefault = _.constant(newDefault);
      }
      this._defaultNodeLabelFn = newDefault;
      return this;
    };
    Graph.prototype.nodeCount = function() {
      return this._nodeCount;
    };
    Graph.prototype.nodes = function() {
      return _.keys(this._nodes);
    };
    Graph.prototype.sources = function() {
      var self2 = this;
      return _.filter(this.nodes(), function(v) {
        return _.isEmpty(self2._in[v]);
      });
    };
    Graph.prototype.sinks = function() {
      var self2 = this;
      return _.filter(this.nodes(), function(v) {
        return _.isEmpty(self2._out[v]);
      });
    };
    Graph.prototype.setNodes = function(vs, value) {
      var args = arguments;
      var self2 = this;
      _.each(vs, function(v) {
        if (args.length > 1) {
          self2.setNode(v, value);
        } else {
          self2.setNode(v);
        }
      });
      return this;
    };
    Graph.prototype.setNode = function(v, value) {
      if (_.has(this._nodes, v)) {
        if (arguments.length > 1) {
          this._nodes[v] = value;
        }
        return this;
      }
      this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
      if (this._isCompound) {
        this._parent[v] = GRAPH_NODE;
        this._children[v] = {};
        this._children[GRAPH_NODE][v] = true;
      }
      this._in[v] = {};
      this._preds[v] = {};
      this._out[v] = {};
      this._sucs[v] = {};
      ++this._nodeCount;
      return this;
    };
    Graph.prototype.node = function(v) {
      return this._nodes[v];
    };
    Graph.prototype.hasNode = function(v) {
      return _.has(this._nodes, v);
    };
    Graph.prototype.removeNode = function(v) {
      var self2 = this;
      if (_.has(this._nodes, v)) {
        var removeEdge = function(e) {
          self2.removeEdge(self2._edgeObjs[e]);
        };
        delete this._nodes[v];
        if (this._isCompound) {
          this._removeFromParentsChildList(v);
          delete this._parent[v];
          _.each(this.children(v), function(child) {
            self2.setParent(child);
          });
          delete this._children[v];
        }
        _.each(_.keys(this._in[v]), removeEdge);
        delete this._in[v];
        delete this._preds[v];
        _.each(_.keys(this._out[v]), removeEdge);
        delete this._out[v];
        delete this._sucs[v];
        --this._nodeCount;
      }
      return this;
    };
    Graph.prototype.setParent = function(v, parent) {
      if (!this._isCompound) {
        throw new Error("Cannot set parent in a non-compound graph");
      }
      if (_.isUndefined(parent)) {
        parent = GRAPH_NODE;
      } else {
        parent += "";
        for (var ancestor = parent; !_.isUndefined(ancestor); ancestor = this.parent(ancestor)) {
          if (ancestor === v) {
            throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
          }
        }
        this.setNode(parent);
      }
      this.setNode(v);
      this._removeFromParentsChildList(v);
      this._parent[v] = parent;
      this._children[parent][v] = true;
      return this;
    };
    Graph.prototype._removeFromParentsChildList = function(v) {
      delete this._children[this._parent[v]][v];
    };
    Graph.prototype.parent = function(v) {
      if (this._isCompound) {
        var parent = this._parent[v];
        if (parent !== GRAPH_NODE) {
          return parent;
        }
      }
    };
    Graph.prototype.children = function(v) {
      if (_.isUndefined(v)) {
        v = GRAPH_NODE;
      }
      if (this._isCompound) {
        var children = this._children[v];
        if (children) {
          return _.keys(children);
        }
      } else if (v === GRAPH_NODE) {
        return this.nodes();
      } else if (this.hasNode(v)) {
        return [];
      }
    };
    Graph.prototype.predecessors = function(v) {
      var predsV = this._preds[v];
      if (predsV) {
        return _.keys(predsV);
      }
    };
    Graph.prototype.successors = function(v) {
      var sucsV = this._sucs[v];
      if (sucsV) {
        return _.keys(sucsV);
      }
    };
    Graph.prototype.neighbors = function(v) {
      var preds = this.predecessors(v);
      if (preds) {
        return _.union(preds, this.successors(v));
      }
    };
    Graph.prototype.isLeaf = function(v) {
      var neighbors;
      if (this.isDirected()) {
        neighbors = this.successors(v);
      } else {
        neighbors = this.neighbors(v);
      }
      return neighbors.length === 0;
    };
    Graph.prototype.filterNodes = function(filter) {
      var copy = new this.constructor({
        directed: this._isDirected,
        multigraph: this._isMultigraph,
        compound: this._isCompound
      });
      copy.setGraph(this.graph());
      var self2 = this;
      _.each(this._nodes, function(value, v) {
        if (filter(v)) {
          copy.setNode(v, value);
        }
      });
      _.each(this._edgeObjs, function(e) {
        if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
          copy.setEdge(e, self2.edge(e));
        }
      });
      var parents = {};
      function findParent(v) {
        var parent = self2.parent(v);
        if (parent === void 0 || copy.hasNode(parent)) {
          parents[v] = parent;
          return parent;
        } else if (parent in parents) {
          return parents[parent];
        } else {
          return findParent(parent);
        }
      }
      if (this._isCompound) {
        _.each(copy.nodes(), function(v) {
          copy.setParent(v, findParent(v));
        });
      }
      return copy;
    };
    Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
      if (!_.isFunction(newDefault)) {
        newDefault = _.constant(newDefault);
      }
      this._defaultEdgeLabelFn = newDefault;
      return this;
    };
    Graph.prototype.edgeCount = function() {
      return this._edgeCount;
    };
    Graph.prototype.edges = function() {
      return _.values(this._edgeObjs);
    };
    Graph.prototype.setPath = function(vs, value) {
      var self2 = this;
      var args = arguments;
      _.reduce(vs, function(v, w2) {
        if (args.length > 1) {
          self2.setEdge(v, w2, value);
        } else {
          self2.setEdge(v, w2);
        }
        return w2;
      });
      return this;
    };
    Graph.prototype.setEdge = function() {
      var v, w2, name, value;
      var valueSpecified = false;
      var arg0 = arguments[0];
      if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
        v = arg0.v;
        w2 = arg0.w;
        name = arg0.name;
        if (arguments.length === 2) {
          value = arguments[1];
          valueSpecified = true;
        }
      } else {
        v = arg0;
        w2 = arguments[1];
        name = arguments[3];
        if (arguments.length > 2) {
          value = arguments[2];
          valueSpecified = true;
        }
      }
      v = "" + v;
      w2 = "" + w2;
      if (!_.isUndefined(name)) {
        name = "" + name;
      }
      var e = edgeArgsToId(this._isDirected, v, w2, name);
      if (_.has(this._edgeLabels, e)) {
        if (valueSpecified) {
          this._edgeLabels[e] = value;
        }
        return this;
      }
      if (!_.isUndefined(name) && !this._isMultigraph) {
        throw new Error("Cannot set a named edge when isMultigraph = false");
      }
      this.setNode(v);
      this.setNode(w2);
      this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w2, name);
      var edgeObj = edgeArgsToObj(this._isDirected, v, w2, name);
      v = edgeObj.v;
      w2 = edgeObj.w;
      Object.freeze(edgeObj);
      this._edgeObjs[e] = edgeObj;
      incrementOrInitEntry(this._preds[w2], v);
      incrementOrInitEntry(this._sucs[v], w2);
      this._in[w2][e] = edgeObj;
      this._out[v][e] = edgeObj;
      this._edgeCount++;
      return this;
    };
    Graph.prototype.edge = function(v, w2, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w2, name);
      return this._edgeLabels[e];
    };
    Graph.prototype.hasEdge = function(v, w2, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w2, name);
      return _.has(this._edgeLabels, e);
    };
    Graph.prototype.removeEdge = function(v, w2, name) {
      var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w2, name);
      var edge = this._edgeObjs[e];
      if (edge) {
        v = edge.v;
        w2 = edge.w;
        delete this._edgeLabels[e];
        delete this._edgeObjs[e];
        decrementOrRemoveEntry(this._preds[w2], v);
        decrementOrRemoveEntry(this._sucs[v], w2);
        delete this._in[w2][e];
        delete this._out[v][e];
        this._edgeCount--;
      }
      return this;
    };
    Graph.prototype.inEdges = function(v, u2) {
      var inV = this._in[v];
      if (inV) {
        var edges = _.values(inV);
        if (!u2) {
          return edges;
        }
        return _.filter(edges, function(edge) {
          return edge.v === u2;
        });
      }
    };
    Graph.prototype.outEdges = function(v, w2) {
      var outV = this._out[v];
      if (outV) {
        var edges = _.values(outV);
        if (!w2) {
          return edges;
        }
        return _.filter(edges, function(edge) {
          return edge.w === w2;
        });
      }
    };
    Graph.prototype.nodeEdges = function(v, w2) {
      var inEdges = this.inEdges(v, w2);
      if (inEdges) {
        return inEdges.concat(this.outEdges(v, w2));
      }
    };
    function incrementOrInitEntry(map, k2) {
      if (map[k2]) {
        map[k2]++;
      } else {
        map[k2] = 1;
      }
    }
    function decrementOrRemoveEntry(map, k2) {
      if (!--map[k2]) {
        delete map[k2];
      }
    }
    function edgeArgsToId(isDirected, v_, w_, name) {
      var v = "" + v_;
      var w2 = "" + w_;
      if (!isDirected && v > w2) {
        var tmp = v;
        v = w2;
        w2 = tmp;
      }
      return v + EDGE_KEY_DELIM + w2 + EDGE_KEY_DELIM + (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
    }
    function edgeArgsToObj(isDirected, v_, w_, name) {
      var v = "" + v_;
      var w2 = "" + w_;
      if (!isDirected && v > w2) {
        var tmp = v;
        v = w2;
        w2 = tmp;
      }
      var edgeObj = {v, w: w2};
      if (name) {
        edgeObj.name = name;
      }
      return edgeObj;
    }
    function edgeObjToId(isDirected, edgeObj) {
      return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
    }
  });

  // node_modules/graphlib/lib/version.js
  var require_version = __commonJS((exports, module) => {
    module.exports = "2.1.8";
  });

  // node_modules/graphlib/lib/index.js
  var require_lib = __commonJS((exports, module) => {
    module.exports = {
      Graph: require_graph(),
      version: require_version()
    };
  });

  // node_modules/graphlib/lib/json.js
  var require_json = __commonJS((exports, module) => {
    var _ = require_lodash();
    var Graph = require_graph();
    module.exports = {
      write,
      read
    };
    function write(g2) {
      var json = {
        options: {
          directed: g2.isDirected(),
          multigraph: g2.isMultigraph(),
          compound: g2.isCompound()
        },
        nodes: writeNodes(g2),
        edges: writeEdges(g2)
      };
      if (!_.isUndefined(g2.graph())) {
        json.value = _.clone(g2.graph());
      }
      return json;
    }
    function writeNodes(g2) {
      return _.map(g2.nodes(), function(v) {
        var nodeValue = g2.node(v);
        var parent = g2.parent(v);
        var node = {v};
        if (!_.isUndefined(nodeValue)) {
          node.value = nodeValue;
        }
        if (!_.isUndefined(parent)) {
          node.parent = parent;
        }
        return node;
      });
    }
    function writeEdges(g2) {
      return _.map(g2.edges(), function(e) {
        var edgeValue = g2.edge(e);
        var edge = {v: e.v, w: e.w};
        if (!_.isUndefined(e.name)) {
          edge.name = e.name;
        }
        if (!_.isUndefined(edgeValue)) {
          edge.value = edgeValue;
        }
        return edge;
      });
    }
    function read(json) {
      var g2 = new Graph(json.options).setGraph(json.value);
      _.each(json.nodes, function(entry) {
        g2.setNode(entry.v, entry.value);
        if (entry.parent) {
          g2.setParent(entry.v, entry.parent);
        }
      });
      _.each(json.edges, function(entry) {
        g2.setEdge({v: entry.v, w: entry.w, name: entry.name}, entry.value);
      });
      return g2;
    }
  });

  // node_modules/graphlib/lib/alg/components.js
  var require_components = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = components;
    function components(g2) {
      var visited = {};
      var cmpts = [];
      var cmpt;
      function dfs(v) {
        if (_.has(visited, v))
          return;
        visited[v] = true;
        cmpt.push(v);
        _.each(g2.successors(v), dfs);
        _.each(g2.predecessors(v), dfs);
      }
      _.each(g2.nodes(), function(v) {
        cmpt = [];
        dfs(v);
        if (cmpt.length) {
          cmpts.push(cmpt);
        }
      });
      return cmpts;
    }
  });

  // node_modules/graphlib/lib/data/priority-queue.js
  var require_priority_queue = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = PriorityQueue;
    function PriorityQueue() {
      this._arr = [];
      this._keyIndices = {};
    }
    PriorityQueue.prototype.size = function() {
      return this._arr.length;
    };
    PriorityQueue.prototype.keys = function() {
      return this._arr.map(function(x) {
        return x.key;
      });
    };
    PriorityQueue.prototype.has = function(key) {
      return _.has(this._keyIndices, key);
    };
    PriorityQueue.prototype.priority = function(key) {
      var index = this._keyIndices[key];
      if (index !== void 0) {
        return this._arr[index].priority;
      }
    };
    PriorityQueue.prototype.min = function() {
      if (this.size() === 0) {
        throw new Error("Queue underflow");
      }
      return this._arr[0].key;
    };
    PriorityQueue.prototype.add = function(key, priority) {
      var keyIndices = this._keyIndices;
      key = String(key);
      if (!_.has(keyIndices, key)) {
        var arr = this._arr;
        var index = arr.length;
        keyIndices[key] = index;
        arr.push({key, priority});
        this._decrease(index);
        return true;
      }
      return false;
    };
    PriorityQueue.prototype.removeMin = function() {
      this._swap(0, this._arr.length - 1);
      var min = this._arr.pop();
      delete this._keyIndices[min.key];
      this._heapify(0);
      return min.key;
    };
    PriorityQueue.prototype.decrease = function(key, priority) {
      var index = this._keyIndices[key];
      if (priority > this._arr[index].priority) {
        throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
      }
      this._arr[index].priority = priority;
      this._decrease(index);
    };
    PriorityQueue.prototype._heapify = function(i) {
      var arr = this._arr;
      var l = 2 * i;
      var r = l + 1;
      var largest = i;
      if (l < arr.length) {
        largest = arr[l].priority < arr[largest].priority ? l : largest;
        if (r < arr.length) {
          largest = arr[r].priority < arr[largest].priority ? r : largest;
        }
        if (largest !== i) {
          this._swap(i, largest);
          this._heapify(largest);
        }
      }
    };
    PriorityQueue.prototype._decrease = function(index) {
      var arr = this._arr;
      var priority = arr[index].priority;
      var parent;
      while (index !== 0) {
        parent = index >> 1;
        if (arr[parent].priority < priority) {
          break;
        }
        this._swap(index, parent);
        index = parent;
      }
    };
    PriorityQueue.prototype._swap = function(i, j) {
      var arr = this._arr;
      var keyIndices = this._keyIndices;
      var origArrI = arr[i];
      var origArrJ = arr[j];
      arr[i] = origArrJ;
      arr[j] = origArrI;
      keyIndices[origArrJ.key] = i;
      keyIndices[origArrI.key] = j;
    };
  });

  // node_modules/graphlib/lib/alg/dijkstra.js
  var require_dijkstra = __commonJS((exports, module) => {
    var _ = require_lodash();
    var PriorityQueue = require_priority_queue();
    module.exports = dijkstra;
    var DEFAULT_WEIGHT_FUNC = _.constant(1);
    function dijkstra(g2, source, weightFn, edgeFn) {
      return runDijkstra(g2, String(source), weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g2.outEdges(v);
      });
    }
    function runDijkstra(g2, source, weightFn, edgeFn) {
      var results = {};
      var pq = new PriorityQueue();
      var v, vEntry;
      var updateNeighbors = function(edge) {
        var w2 = edge.v !== v ? edge.v : edge.w;
        var wEntry = results[w2];
        var weight = weightFn(edge);
        var distance = vEntry.distance + weight;
        if (weight < 0) {
          throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge + " Weight: " + weight);
        }
        if (distance < wEntry.distance) {
          wEntry.distance = distance;
          wEntry.predecessor = v;
          pq.decrease(w2, distance);
        }
      };
      g2.nodes().forEach(function(v2) {
        var distance = v2 === source ? 0 : Number.POSITIVE_INFINITY;
        results[v2] = {distance};
        pq.add(v2, distance);
      });
      while (pq.size() > 0) {
        v = pq.removeMin();
        vEntry = results[v];
        if (vEntry.distance === Number.POSITIVE_INFINITY) {
          break;
        }
        edgeFn(v).forEach(updateNeighbors);
      }
      return results;
    }
  });

  // node_modules/graphlib/lib/alg/dijkstra-all.js
  var require_dijkstra_all = __commonJS((exports, module) => {
    var dijkstra = require_dijkstra();
    var _ = require_lodash();
    module.exports = dijkstraAll;
    function dijkstraAll(g2, weightFunc, edgeFunc) {
      return _.transform(g2.nodes(), function(acc, v) {
        acc[v] = dijkstra(g2, v, weightFunc, edgeFunc);
      }, {});
    }
  });

  // node_modules/graphlib/lib/alg/tarjan.js
  var require_tarjan = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = tarjan;
    function tarjan(g2) {
      var index = 0;
      var stack = [];
      var visited = {};
      var results = [];
      function dfs(v) {
        var entry = visited[v] = {
          onStack: true,
          lowlink: index,
          index: index++
        };
        stack.push(v);
        g2.successors(v).forEach(function(w3) {
          if (!_.has(visited, w3)) {
            dfs(w3);
            entry.lowlink = Math.min(entry.lowlink, visited[w3].lowlink);
          } else if (visited[w3].onStack) {
            entry.lowlink = Math.min(entry.lowlink, visited[w3].index);
          }
        });
        if (entry.lowlink === entry.index) {
          var cmpt = [];
          var w2;
          do {
            w2 = stack.pop();
            visited[w2].onStack = false;
            cmpt.push(w2);
          } while (v !== w2);
          results.push(cmpt);
        }
      }
      g2.nodes().forEach(function(v) {
        if (!_.has(visited, v)) {
          dfs(v);
        }
      });
      return results;
    }
  });

  // node_modules/graphlib/lib/alg/find-cycles.js
  var require_find_cycles = __commonJS((exports, module) => {
    var _ = require_lodash();
    var tarjan = require_tarjan();
    module.exports = findCycles;
    function findCycles(g2) {
      return _.filter(tarjan(g2), function(cmpt) {
        return cmpt.length > 1 || cmpt.length === 1 && g2.hasEdge(cmpt[0], cmpt[0]);
      });
    }
  });

  // node_modules/graphlib/lib/alg/floyd-warshall.js
  var require_floyd_warshall = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = floydWarshall;
    var DEFAULT_WEIGHT_FUNC = _.constant(1);
    function floydWarshall(g2, weightFn, edgeFn) {
      return runFloydWarshall(g2, weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g2.outEdges(v);
      });
    }
    function runFloydWarshall(g2, weightFn, edgeFn) {
      var results = {};
      var nodes = g2.nodes();
      nodes.forEach(function(v) {
        results[v] = {};
        results[v][v] = {distance: 0};
        nodes.forEach(function(w2) {
          if (v !== w2) {
            results[v][w2] = {distance: Number.POSITIVE_INFINITY};
          }
        });
        edgeFn(v).forEach(function(edge) {
          var w2 = edge.v === v ? edge.w : edge.v;
          var d = weightFn(edge);
          results[v][w2] = {distance: d, predecessor: v};
        });
      });
      nodes.forEach(function(k2) {
        var rowK = results[k2];
        nodes.forEach(function(i) {
          var rowI = results[i];
          nodes.forEach(function(j) {
            var ik = rowI[k2];
            var kj = rowK[j];
            var ij = rowI[j];
            var altDistance = ik.distance + kj.distance;
            if (altDistance < ij.distance) {
              ij.distance = altDistance;
              ij.predecessor = kj.predecessor;
            }
          });
        });
      });
      return results;
    }
  });

  // node_modules/graphlib/lib/alg/topsort.js
  var require_topsort = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = topsort;
    topsort.CycleException = CycleException;
    function topsort(g2) {
      var visited = {};
      var stack = {};
      var results = [];
      function visit(node) {
        if (_.has(stack, node)) {
          throw new CycleException();
        }
        if (!_.has(visited, node)) {
          stack[node] = true;
          visited[node] = true;
          _.each(g2.predecessors(node), visit);
          delete stack[node];
          results.push(node);
        }
      }
      _.each(g2.sinks(), visit);
      if (_.size(visited) !== g2.nodeCount()) {
        throw new CycleException();
      }
      return results;
    }
    function CycleException() {
    }
    CycleException.prototype = new Error();
  });

  // node_modules/graphlib/lib/alg/is-acyclic.js
  var require_is_acyclic = __commonJS((exports, module) => {
    var topsort = require_topsort();
    module.exports = isAcyclic;
    function isAcyclic(g2) {
      try {
        topsort(g2);
      } catch (e) {
        if (e instanceof topsort.CycleException) {
          return false;
        }
        throw e;
      }
      return true;
    }
  });

  // node_modules/graphlib/lib/alg/dfs.js
  var require_dfs = __commonJS((exports, module) => {
    var _ = require_lodash();
    module.exports = dfs;
    function dfs(g2, vs, order) {
      if (!_.isArray(vs)) {
        vs = [vs];
      }
      var navigation = (g2.isDirected() ? g2.successors : g2.neighbors).bind(g2);
      var acc = [];
      var visited = {};
      _.each(vs, function(v) {
        if (!g2.hasNode(v)) {
          throw new Error("Graph does not have node: " + v);
        }
        doDfs(g2, v, order === "post", visited, navigation, acc);
      });
      return acc;
    }
    function doDfs(g2, v, postorder, visited, navigation, acc) {
      if (!_.has(visited, v)) {
        visited[v] = true;
        if (!postorder) {
          acc.push(v);
        }
        _.each(navigation(v), function(w2) {
          doDfs(g2, w2, postorder, visited, navigation, acc);
        });
        if (postorder) {
          acc.push(v);
        }
      }
    }
  });

  // node_modules/graphlib/lib/alg/postorder.js
  var require_postorder = __commonJS((exports, module) => {
    var dfs = require_dfs();
    module.exports = postorder;
    function postorder(g2, vs) {
      return dfs(g2, vs, "post");
    }
  });

  // node_modules/graphlib/lib/alg/preorder.js
  var require_preorder = __commonJS((exports, module) => {
    var dfs = require_dfs();
    module.exports = preorder;
    function preorder(g2, vs) {
      return dfs(g2, vs, "pre");
    }
  });

  // node_modules/graphlib/lib/alg/prim.js
  var require_prim = __commonJS((exports, module) => {
    var _ = require_lodash();
    var Graph = require_graph();
    var PriorityQueue = require_priority_queue();
    module.exports = prim;
    function prim(g2, weightFunc) {
      var result = new Graph();
      var parents = {};
      var pq = new PriorityQueue();
      var v;
      function updateNeighbors(edge) {
        var w2 = edge.v === v ? edge.w : edge.v;
        var pri = pq.priority(w2);
        if (pri !== void 0) {
          var edgeWeight = weightFunc(edge);
          if (edgeWeight < pri) {
            parents[w2] = v;
            pq.decrease(w2, edgeWeight);
          }
        }
      }
      if (g2.nodeCount() === 0) {
        return result;
      }
      _.each(g2.nodes(), function(v2) {
        pq.add(v2, Number.POSITIVE_INFINITY);
        result.setNode(v2);
      });
      pq.decrease(g2.nodes()[0], 0);
      var init = false;
      while (pq.size() > 0) {
        v = pq.removeMin();
        if (_.has(parents, v)) {
          result.setEdge(v, parents[v]);
        } else if (init) {
          throw new Error("Input graph is not connected: " + g2);
        } else {
          init = true;
        }
        g2.nodeEdges(v).forEach(updateNeighbors);
      }
      return result;
    }
  });

  // node_modules/graphlib/lib/alg/index.js
  var require_alg = __commonJS((exports, module) => {
    module.exports = {
      components: require_components(),
      dijkstra: require_dijkstra(),
      dijkstraAll: require_dijkstra_all(),
      findCycles: require_find_cycles(),
      floydWarshall: require_floyd_warshall(),
      isAcyclic: require_is_acyclic(),
      postorder: require_postorder(),
      preorder: require_preorder(),
      prim: require_prim(),
      tarjan: require_tarjan(),
      topsort: require_topsort()
    };
  });

  // node_modules/graphlib/index.js
  var require_graphlib = __commonJS((exports, module) => {
    var lib = require_lib();
    module.exports = {
      Graph: lib.Graph,
      json: require_json(),
      alg: require_alg(),
      version: lib.version
    };
  });

  // node_modules/dagre/lib/graphlib.js
  var require_graphlib2 = __commonJS((exports, module) => {
    var graphlib;
    if (true) {
      try {
        graphlib = require_graphlib();
      } catch (e) {
      }
    }
    if (!graphlib) {
      graphlib = window.graphlib;
    }
    module.exports = graphlib;
  });

  // node_modules/lodash/cloneDeep.js
  var require_cloneDeep = __commonJS((exports, module) => {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep;
  });

  // node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS((exports, module) => {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  });

  // node_modules/lodash/defaults.js
  var require_defaults = __commonJS((exports, module) => {
    var baseRest = require_baseRest();
    var eq = require_eq();
    var isIterateeCall = require_isIterateeCall();
    var keysIn = require_keysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var defaults = baseRest(function(object, sources) {
      object = Object(object);
      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];
          if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            object[key] = source[key];
          }
        }
      }
      return object;
    });
    module.exports = defaults;
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS((exports, module) => {
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    module.exports = createFind;
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS((exports, module) => {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS((exports, module) => {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS((exports, module) => {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS((exports, module) => {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS((exports, module) => {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS((exports, module) => {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index);
    }
    module.exports = findIndex;
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS((exports, module) => {
    var createFind = require_createFind();
    var findIndex = require_findIndex();
    var find = createFind(findIndex);
    module.exports = find;
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS((exports, module) => {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  });

  // node_modules/lodash/forIn.js
  var require_forIn = __commonJS((exports, module) => {
    var baseFor = require_baseFor();
    var castFunction = require_castFunction();
    var keysIn = require_keysIn();
    function forIn(object, iteratee) {
      return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
    }
    module.exports = forIn;
  });

  // node_modules/lodash/last.js
  var require_last = __commonJS((exports, module) => {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last;
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS((exports, module) => {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues;
  });

  // node_modules/lodash/_baseExtremum.js
  var require_baseExtremum = __commonJS((exports, module) => {
    var isSymbol = require_isSymbol();
    function baseExtremum(array, iteratee, comparator) {
      var index = -1, length = array.length;
      while (++index < length) {
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
          var computed = current, result = value;
        }
      }
      return result;
    }
    module.exports = baseExtremum;
  });

  // node_modules/lodash/_baseGt.js
  var require_baseGt = __commonJS((exports, module) => {
    function baseGt(value, other) {
      return value > other;
    }
    module.exports = baseGt;
  });

  // node_modules/lodash/max.js
  var require_max = __commonJS((exports, module) => {
    var baseExtremum = require_baseExtremum();
    var baseGt = require_baseGt();
    var identity = require_identity();
    function max(array) {
      return array && array.length ? baseExtremum(array, identity, baseGt) : void 0;
    }
    module.exports = max;
  });

  // node_modules/lodash/_assignMergeValue.js
  var require_assignMergeValue = __commonJS((exports, module) => {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignMergeValue;
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS((exports, module) => {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  });

  // node_modules/lodash/_safeGet.js
  var require_safeGet = __commonJS((exports, module) => {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module.exports = safeGet;
  });

  // node_modules/lodash/toPlainObject.js
  var require_toPlainObject = __commonJS((exports, module) => {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module.exports = toPlainObject;
  });

  // node_modules/lodash/_baseMergeDeep.js
  var require_baseMergeDeep = __commonJS((exports, module) => {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module.exports = baseMergeDeep;
  });

  // node_modules/lodash/_baseMerge.js
  var require_baseMerge = __commonJS((exports, module) => {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  });

  // node_modules/lodash/_createAssigner.js
  var require_createAssigner = __commonJS((exports, module) => {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  });

  // node_modules/lodash/merge.js
  var require_merge = __commonJS((exports, module) => {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge;
  });

  // node_modules/lodash/_baseLt.js
  var require_baseLt = __commonJS((exports, module) => {
    function baseLt(value, other) {
      return value < other;
    }
    module.exports = baseLt;
  });

  // node_modules/lodash/min.js
  var require_min = __commonJS((exports, module) => {
    var baseExtremum = require_baseExtremum();
    var baseLt = require_baseLt();
    var identity = require_identity();
    function min(array) {
      return array && array.length ? baseExtremum(array, identity, baseLt) : void 0;
    }
    module.exports = min;
  });

  // node_modules/lodash/minBy.js
  var require_minBy = __commonJS((exports, module) => {
    var baseExtremum = require_baseExtremum();
    var baseIteratee = require_baseIteratee();
    var baseLt = require_baseLt();
    function minBy(array, iteratee) {
      return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt) : void 0;
    }
    module.exports = minBy;
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS((exports, module) => {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS((exports, module) => {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS((exports, module) => {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index = -1, length = paths.length, result = {};
      while (++index < length) {
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  });

  // node_modules/lodash/_basePick.js
  var require_basePick = __commonJS((exports, module) => {
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }
    module.exports = basePick;
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS((exports, module) => {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  });

  // node_modules/lodash/pick.js
  var require_pick = __commonJS((exports, module) => {
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick;
  });

  // node_modules/lodash/_baseRange.js
  var require_baseRange = __commonJS((exports, module) => {
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    module.exports = baseRange;
  });

  // node_modules/lodash/_createRange.js
  var require_createRange = __commonJS((exports, module) => {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    module.exports = createRange;
  });

  // node_modules/lodash/range.js
  var require_range = __commonJS((exports, module) => {
    var createRange = require_createRange();
    var range = createRange();
    module.exports = range;
  });

  // node_modules/lodash/_baseSortBy.js
  var require_baseSortBy = __commonJS((exports, module) => {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  });

  // node_modules/lodash/_compareAscending.js
  var require_compareAscending = __commonJS((exports, module) => {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  });

  // node_modules/lodash/_compareMultiple.js
  var require_compareMultiple = __commonJS((exports, module) => {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  });

  // node_modules/lodash/_baseOrderBy.js
  var require_baseOrderBy = __commonJS((exports, module) => {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return {criteria, index: ++index, value};
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  });

  // node_modules/lodash/sortBy.js
  var require_sortBy = __commonJS((exports, module) => {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  });

  // node_modules/lodash/uniqueId.js
  var require_uniqueId = __commonJS((exports, module) => {
    var toString = require_toString();
    var idCounter = 0;
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    module.exports = uniqueId;
  });

  // node_modules/lodash/_baseZipObject.js
  var require_baseZipObject = __commonJS((exports, module) => {
    function baseZipObject(props, values, assignFunc) {
      var index = -1, length = props.length, valsLength = values.length, result = {};
      while (++index < length) {
        var value = index < valsLength ? values[index] : void 0;
        assignFunc(result, props[index], value);
      }
      return result;
    }
    module.exports = baseZipObject;
  });

  // node_modules/lodash/zipObject.js
  var require_zipObject = __commonJS((exports, module) => {
    var assignValue = require_assignValue();
    var baseZipObject = require_baseZipObject();
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }
    module.exports = zipObject;
  });

  // node_modules/dagre/lib/lodash.js
  var require_lodash2 = __commonJS((exports, module) => {
    var lodash;
    if (true) {
      try {
        lodash = {
          cloneDeep: require_cloneDeep(),
          constant: require_constant(),
          defaults: require_defaults(),
          each: require_each(),
          filter: require_filter(),
          find: require_find(),
          flatten: require_flatten(),
          forEach: require_forEach(),
          forIn: require_forIn(),
          has: require_has(),
          isUndefined: require_isUndefined(),
          last: require_last(),
          map: require_map(),
          mapValues: require_mapValues(),
          max: require_max(),
          merge: require_merge(),
          min: require_min(),
          minBy: require_minBy(),
          now: require_now(),
          pick: require_pick(),
          range: require_range(),
          reduce: require_reduce(),
          sortBy: require_sortBy(),
          uniqueId: require_uniqueId(),
          values: require_values(),
          zipObject: require_zipObject()
        };
      } catch (e) {
      }
    }
    if (!lodash) {
      lodash = window._;
    }
    module.exports = lodash;
  });

  // node_modules/dagre/lib/data/list.js
  var require_list = __commonJS((exports, module) => {
    module.exports = List;
    function List() {
      var sentinel = {};
      sentinel._next = sentinel._prev = sentinel;
      this._sentinel = sentinel;
    }
    List.prototype.dequeue = function() {
      var sentinel = this._sentinel;
      var entry = sentinel._prev;
      if (entry !== sentinel) {
        unlink(entry);
        return entry;
      }
    };
    List.prototype.enqueue = function(entry) {
      var sentinel = this._sentinel;
      if (entry._prev && entry._next) {
        unlink(entry);
      }
      entry._next = sentinel._next;
      sentinel._next._prev = entry;
      sentinel._next = entry;
      entry._prev = sentinel;
    };
    List.prototype.toString = function() {
      var strs = [];
      var sentinel = this._sentinel;
      var curr = sentinel._prev;
      while (curr !== sentinel) {
        strs.push(JSON.stringify(curr, filterOutLinks));
        curr = curr._prev;
      }
      return "[" + strs.join(", ") + "]";
    };
    function unlink(entry) {
      entry._prev._next = entry._next;
      entry._next._prev = entry._prev;
      delete entry._next;
      delete entry._prev;
    }
    function filterOutLinks(k2, v) {
      if (k2 !== "_next" && k2 !== "_prev") {
        return v;
      }
    }
  });

  // node_modules/dagre/lib/greedy-fas.js
  var require_greedy_fas = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var List = require_list();
    module.exports = greedyFAS;
    var DEFAULT_WEIGHT_FN = _.constant(1);
    function greedyFAS(g2, weightFn) {
      if (g2.nodeCount() <= 1) {
        return [];
      }
      var state = buildState(g2, weightFn || DEFAULT_WEIGHT_FN);
      var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
      return _.flatten(_.map(results, function(e) {
        return g2.outEdges(e.v, e.w);
      }), true);
    }
    function doGreedyFAS(g2, buckets, zeroIdx) {
      var results = [];
      var sources = buckets[buckets.length - 1];
      var sinks = buckets[0];
      var entry;
      while (g2.nodeCount()) {
        while (entry = sinks.dequeue()) {
          removeNode(g2, buckets, zeroIdx, entry);
        }
        while (entry = sources.dequeue()) {
          removeNode(g2, buckets, zeroIdx, entry);
        }
        if (g2.nodeCount()) {
          for (var i = buckets.length - 2; i > 0; --i) {
            entry = buckets[i].dequeue();
            if (entry) {
              results = results.concat(removeNode(g2, buckets, zeroIdx, entry, true));
              break;
            }
          }
        }
      }
      return results;
    }
    function removeNode(g2, buckets, zeroIdx, entry, collectPredecessors) {
      var results = collectPredecessors ? [] : void 0;
      _.forEach(g2.inEdges(entry.v), function(edge) {
        var weight = g2.edge(edge);
        var uEntry = g2.node(edge.v);
        if (collectPredecessors) {
          results.push({v: edge.v, w: edge.w});
        }
        uEntry.out -= weight;
        assignBucket(buckets, zeroIdx, uEntry);
      });
      _.forEach(g2.outEdges(entry.v), function(edge) {
        var weight = g2.edge(edge);
        var w2 = edge.w;
        var wEntry = g2.node(w2);
        wEntry["in"] -= weight;
        assignBucket(buckets, zeroIdx, wEntry);
      });
      g2.removeNode(entry.v);
      return results;
    }
    function buildState(g2, weightFn) {
      var fasGraph = new Graph();
      var maxIn = 0;
      var maxOut = 0;
      _.forEach(g2.nodes(), function(v) {
        fasGraph.setNode(v, {v, in: 0, out: 0});
      });
      _.forEach(g2.edges(), function(e) {
        var prevWeight = fasGraph.edge(e.v, e.w) || 0;
        var weight = weightFn(e);
        var edgeWeight = prevWeight + weight;
        fasGraph.setEdge(e.v, e.w, edgeWeight);
        maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
        maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
      });
      var buckets = _.range(maxOut + maxIn + 3).map(function() {
        return new List();
      });
      var zeroIdx = maxIn + 1;
      _.forEach(fasGraph.nodes(), function(v) {
        assignBucket(buckets, zeroIdx, fasGraph.node(v));
      });
      return {graph: fasGraph, buckets, zeroIdx};
    }
    function assignBucket(buckets, zeroIdx, entry) {
      if (!entry.out) {
        buckets[0].enqueue(entry);
      } else if (!entry["in"]) {
        buckets[buckets.length - 1].enqueue(entry);
      } else {
        buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
      }
    }
  });

  // node_modules/dagre/lib/acyclic.js
  var require_acyclic = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var greedyFAS = require_greedy_fas();
    module.exports = {
      run,
      undo
    };
    function run(g2) {
      var fas = g2.graph().acyclicer === "greedy" ? greedyFAS(g2, weightFn(g2)) : dfsFAS(g2);
      _.forEach(fas, function(e) {
        var label = g2.edge(e);
        g2.removeEdge(e);
        label.forwardName = e.name;
        label.reversed = true;
        g2.setEdge(e.w, e.v, label, _.uniqueId("rev"));
      });
      function weightFn(g3) {
        return function(e) {
          return g3.edge(e).weight;
        };
      }
    }
    function dfsFAS(g2) {
      var fas = [];
      var stack = {};
      var visited = {};
      function dfs(v) {
        if (_.has(visited, v)) {
          return;
        }
        visited[v] = true;
        stack[v] = true;
        _.forEach(g2.outEdges(v), function(e) {
          if (_.has(stack, e.w)) {
            fas.push(e);
          } else {
            dfs(e.w);
          }
        });
        delete stack[v];
      }
      _.forEach(g2.nodes(), dfs);
      return fas;
    }
    function undo(g2) {
      _.forEach(g2.edges(), function(e) {
        var label = g2.edge(e);
        if (label.reversed) {
          g2.removeEdge(e);
          var forwardName = label.forwardName;
          delete label.reversed;
          delete label.forwardName;
          g2.setEdge(e.w, e.v, label, forwardName);
        }
      });
    }
  });

  // node_modules/dagre/lib/util.js
  var require_util = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    module.exports = {
      addDummyNode,
      simplify,
      asNonCompoundGraph,
      successorWeights,
      predecessorWeights,
      intersectRect,
      buildLayerMatrix,
      normalizeRanks,
      removeEmptyRanks,
      addBorderNode,
      maxRank,
      partition,
      time: time2,
      notime
    };
    function addDummyNode(g2, type, attrs, name) {
      var v;
      do {
        v = _.uniqueId(name);
      } while (g2.hasNode(v));
      attrs.dummy = type;
      g2.setNode(v, attrs);
      return v;
    }
    function simplify(g2) {
      var simplified = new Graph().setGraph(g2.graph());
      _.forEach(g2.nodes(), function(v) {
        simplified.setNode(v, g2.node(v));
      });
      _.forEach(g2.edges(), function(e) {
        var simpleLabel = simplified.edge(e.v, e.w) || {weight: 0, minlen: 1};
        var label = g2.edge(e);
        simplified.setEdge(e.v, e.w, {
          weight: simpleLabel.weight + label.weight,
          minlen: Math.max(simpleLabel.minlen, label.minlen)
        });
      });
      return simplified;
    }
    function asNonCompoundGraph(g2) {
      var simplified = new Graph({multigraph: g2.isMultigraph()}).setGraph(g2.graph());
      _.forEach(g2.nodes(), function(v) {
        if (!g2.children(v).length) {
          simplified.setNode(v, g2.node(v));
        }
      });
      _.forEach(g2.edges(), function(e) {
        simplified.setEdge(e, g2.edge(e));
      });
      return simplified;
    }
    function successorWeights(g2) {
      var weightMap = _.map(g2.nodes(), function(v) {
        var sucs = {};
        _.forEach(g2.outEdges(v), function(e) {
          sucs[e.w] = (sucs[e.w] || 0) + g2.edge(e).weight;
        });
        return sucs;
      });
      return _.zipObject(g2.nodes(), weightMap);
    }
    function predecessorWeights(g2) {
      var weightMap = _.map(g2.nodes(), function(v) {
        var preds = {};
        _.forEach(g2.inEdges(v), function(e) {
          preds[e.v] = (preds[e.v] || 0) + g2.edge(e).weight;
        });
        return preds;
      });
      return _.zipObject(g2.nodes(), weightMap);
    }
    function intersectRect(rect, point) {
      var x = rect.x;
      var y = rect.y;
      var dx = point.x - x;
      var dy = point.y - y;
      var w2 = rect.width / 2;
      var h3 = rect.height / 2;
      if (!dx && !dy) {
        throw new Error("Not possible to find intersection inside of the rectangle");
      }
      var sx, sy;
      if (Math.abs(dy) * w2 > Math.abs(dx) * h3) {
        if (dy < 0) {
          h3 = -h3;
        }
        sx = h3 * dx / dy;
        sy = h3;
      } else {
        if (dx < 0) {
          w2 = -w2;
        }
        sx = w2;
        sy = w2 * dy / dx;
      }
      return {x: x + sx, y: y + sy};
    }
    function buildLayerMatrix(g2) {
      var layering = _.map(_.range(maxRank(g2) + 1), function() {
        return [];
      });
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        var rank = node.rank;
        if (!_.isUndefined(rank)) {
          layering[rank][node.order] = v;
        }
      });
      return layering;
    }
    function normalizeRanks(g2) {
      var min = _.min(_.map(g2.nodes(), function(v) {
        return g2.node(v).rank;
      }));
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        if (_.has(node, "rank")) {
          node.rank -= min;
        }
      });
    }
    function removeEmptyRanks(g2) {
      var offset = _.min(_.map(g2.nodes(), function(v) {
        return g2.node(v).rank;
      }));
      var layers = [];
      _.forEach(g2.nodes(), function(v) {
        var rank = g2.node(v).rank - offset;
        if (!layers[rank]) {
          layers[rank] = [];
        }
        layers[rank].push(v);
      });
      var delta = 0;
      var nodeRankFactor = g2.graph().nodeRankFactor;
      _.forEach(layers, function(vs, i) {
        if (_.isUndefined(vs) && i % nodeRankFactor !== 0) {
          --delta;
        } else if (delta) {
          _.forEach(vs, function(v) {
            g2.node(v).rank += delta;
          });
        }
      });
    }
    function addBorderNode(g2, prefix, rank, order) {
      var node = {
        width: 0,
        height: 0
      };
      if (arguments.length >= 4) {
        node.rank = rank;
        node.order = order;
      }
      return addDummyNode(g2, "border", node, prefix);
    }
    function maxRank(g2) {
      return _.max(_.map(g2.nodes(), function(v) {
        var rank = g2.node(v).rank;
        if (!_.isUndefined(rank)) {
          return rank;
        }
      }));
    }
    function partition(collection, fn) {
      var result = {lhs: [], rhs: []};
      _.forEach(collection, function(value) {
        if (fn(value)) {
          result.lhs.push(value);
        } else {
          result.rhs.push(value);
        }
      });
      return result;
    }
    function time2(name, fn) {
      var start = _.now();
      try {
        return fn();
      } finally {
        console.log(name + " time: " + (_.now() - start) + "ms");
      }
    }
    function notime(name, fn) {
      return fn();
    }
  });

  // node_modules/dagre/lib/normalize.js
  var require_normalize = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var util = require_util();
    module.exports = {
      run,
      undo
    };
    function run(g2) {
      g2.graph().dummyChains = [];
      _.forEach(g2.edges(), function(edge) {
        normalizeEdge(g2, edge);
      });
    }
    function normalizeEdge(g2, e) {
      var v = e.v;
      var vRank = g2.node(v).rank;
      var w2 = e.w;
      var wRank = g2.node(w2).rank;
      var name = e.name;
      var edgeLabel = g2.edge(e);
      var labelRank = edgeLabel.labelRank;
      if (wRank === vRank + 1)
        return;
      g2.removeEdge(e);
      var dummy, attrs, i;
      for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
        edgeLabel.points = [];
        attrs = {
          width: 0,
          height: 0,
          edgeLabel,
          edgeObj: e,
          rank: vRank
        };
        dummy = util.addDummyNode(g2, "edge", attrs, "_d");
        if (vRank === labelRank) {
          attrs.width = edgeLabel.width;
          attrs.height = edgeLabel.height;
          attrs.dummy = "edge-label";
          attrs.labelpos = edgeLabel.labelpos;
        }
        g2.setEdge(v, dummy, {weight: edgeLabel.weight}, name);
        if (i === 0) {
          g2.graph().dummyChains.push(dummy);
        }
        v = dummy;
      }
      g2.setEdge(v, w2, {weight: edgeLabel.weight}, name);
    }
    function undo(g2) {
      _.forEach(g2.graph().dummyChains, function(v) {
        var node = g2.node(v);
        var origLabel = node.edgeLabel;
        var w2;
        g2.setEdge(node.edgeObj, origLabel);
        while (node.dummy) {
          w2 = g2.successors(v)[0];
          g2.removeNode(v);
          origLabel.points.push({x: node.x, y: node.y});
          if (node.dummy === "edge-label") {
            origLabel.x = node.x;
            origLabel.y = node.y;
            origLabel.width = node.width;
            origLabel.height = node.height;
          }
          v = w2;
          node = g2.node(v);
        }
      });
    }
  });

  // node_modules/dagre/lib/rank/util.js
  var require_util2 = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    module.exports = {
      longestPath,
      slack
    };
    function longestPath(g2) {
      var visited = {};
      function dfs(v) {
        var label = g2.node(v);
        if (_.has(visited, v)) {
          return label.rank;
        }
        visited[v] = true;
        var rank = _.min(_.map(g2.outEdges(v), function(e) {
          return dfs(e.w) - g2.edge(e).minlen;
        }));
        if (rank === Number.POSITIVE_INFINITY || rank === void 0 || rank === null) {
          rank = 0;
        }
        return label.rank = rank;
      }
      _.forEach(g2.sources(), dfs);
    }
    function slack(g2, e) {
      return g2.node(e.w).rank - g2.node(e.v).rank - g2.edge(e).minlen;
    }
  });

  // node_modules/dagre/lib/rank/feasible-tree.js
  var require_feasible_tree = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var slack = require_util2().slack;
    module.exports = feasibleTree;
    function feasibleTree(g2) {
      var t = new Graph({directed: false});
      var start = g2.nodes()[0];
      var size = g2.nodeCount();
      t.setNode(start, {});
      var edge, delta;
      while (tightTree(t, g2) < size) {
        edge = findMinSlackEdge(t, g2);
        delta = t.hasNode(edge.v) ? slack(g2, edge) : -slack(g2, edge);
        shiftRanks(t, g2, delta);
      }
      return t;
    }
    function tightTree(t, g2) {
      function dfs(v) {
        _.forEach(g2.nodeEdges(v), function(e) {
          var edgeV = e.v, w2 = v === edgeV ? e.w : edgeV;
          if (!t.hasNode(w2) && !slack(g2, e)) {
            t.setNode(w2, {});
            t.setEdge(v, w2, {});
            dfs(w2);
          }
        });
      }
      _.forEach(t.nodes(), dfs);
      return t.nodeCount();
    }
    function findMinSlackEdge(t, g2) {
      return _.minBy(g2.edges(), function(e) {
        if (t.hasNode(e.v) !== t.hasNode(e.w)) {
          return slack(g2, e);
        }
      });
    }
    function shiftRanks(t, g2, delta) {
      _.forEach(t.nodes(), function(v) {
        g2.node(v).rank += delta;
      });
    }
  });

  // node_modules/dagre/lib/rank/network-simplex.js
  var require_network_simplex = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var feasibleTree = require_feasible_tree();
    var slack = require_util2().slack;
    var initRank = require_util2().longestPath;
    var preorder = require_graphlib2().alg.preorder;
    var postorder = require_graphlib2().alg.postorder;
    var simplify = require_util().simplify;
    module.exports = networkSimplex;
    networkSimplex.initLowLimValues = initLowLimValues;
    networkSimplex.initCutValues = initCutValues;
    networkSimplex.calcCutValue = calcCutValue;
    networkSimplex.leaveEdge = leaveEdge;
    networkSimplex.enterEdge = enterEdge;
    networkSimplex.exchangeEdges = exchangeEdges;
    function networkSimplex(g2) {
      g2 = simplify(g2);
      initRank(g2);
      var t = feasibleTree(g2);
      initLowLimValues(t);
      initCutValues(t, g2);
      var e, f;
      while (e = leaveEdge(t)) {
        f = enterEdge(t, g2, e);
        exchangeEdges(t, g2, e, f);
      }
    }
    function initCutValues(t, g2) {
      var vs = postorder(t, t.nodes());
      vs = vs.slice(0, vs.length - 1);
      _.forEach(vs, function(v) {
        assignCutValue(t, g2, v);
      });
    }
    function assignCutValue(t, g2, child) {
      var childLab = t.node(child);
      var parent = childLab.parent;
      t.edge(child, parent).cutvalue = calcCutValue(t, g2, child);
    }
    function calcCutValue(t, g2, child) {
      var childLab = t.node(child);
      var parent = childLab.parent;
      var childIsTail = true;
      var graphEdge = g2.edge(child, parent);
      var cutValue = 0;
      if (!graphEdge) {
        childIsTail = false;
        graphEdge = g2.edge(parent, child);
      }
      cutValue = graphEdge.weight;
      _.forEach(g2.nodeEdges(child), function(e) {
        var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
        if (other !== parent) {
          var pointsToHead = isOutEdge === childIsTail, otherWeight = g2.edge(e).weight;
          cutValue += pointsToHead ? otherWeight : -otherWeight;
          if (isTreeEdge(t, child, other)) {
            var otherCutValue = t.edge(child, other).cutvalue;
            cutValue += pointsToHead ? -otherCutValue : otherCutValue;
          }
        }
      });
      return cutValue;
    }
    function initLowLimValues(tree, root) {
      if (arguments.length < 2) {
        root = tree.nodes()[0];
      }
      dfsAssignLowLim(tree, {}, 1, root);
    }
    function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
      var low = nextLim;
      var label = tree.node(v);
      visited[v] = true;
      _.forEach(tree.neighbors(v), function(w2) {
        if (!_.has(visited, w2)) {
          nextLim = dfsAssignLowLim(tree, visited, nextLim, w2, v);
        }
      });
      label.low = low;
      label.lim = nextLim++;
      if (parent) {
        label.parent = parent;
      } else {
        delete label.parent;
      }
      return nextLim;
    }
    function leaveEdge(tree) {
      return _.find(tree.edges(), function(e) {
        return tree.edge(e).cutvalue < 0;
      });
    }
    function enterEdge(t, g2, edge) {
      var v = edge.v;
      var w2 = edge.w;
      if (!g2.hasEdge(v, w2)) {
        v = edge.w;
        w2 = edge.v;
      }
      var vLabel = t.node(v);
      var wLabel = t.node(w2);
      var tailLabel = vLabel;
      var flip = false;
      if (vLabel.lim > wLabel.lim) {
        tailLabel = wLabel;
        flip = true;
      }
      var candidates = _.filter(g2.edges(), function(edge2) {
        return flip === isDescendant(t, t.node(edge2.v), tailLabel) && flip !== isDescendant(t, t.node(edge2.w), tailLabel);
      });
      return _.minBy(candidates, function(edge2) {
        return slack(g2, edge2);
      });
    }
    function exchangeEdges(t, g2, e, f) {
      var v = e.v;
      var w2 = e.w;
      t.removeEdge(v, w2);
      t.setEdge(f.v, f.w, {});
      initLowLimValues(t);
      initCutValues(t, g2);
      updateRanks(t, g2);
    }
    function updateRanks(t, g2) {
      var root = _.find(t.nodes(), function(v) {
        return !g2.node(v).parent;
      });
      var vs = preorder(t, root);
      vs = vs.slice(1);
      _.forEach(vs, function(v) {
        var parent = t.node(v).parent, edge = g2.edge(v, parent), flipped = false;
        if (!edge) {
          edge = g2.edge(parent, v);
          flipped = true;
        }
        g2.node(v).rank = g2.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
      });
    }
    function isTreeEdge(tree, u2, v) {
      return tree.hasEdge(u2, v);
    }
    function isDescendant(tree, vLabel, rootLabel) {
      return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
    }
  });

  // node_modules/dagre/lib/rank/index.js
  var require_rank = __commonJS((exports, module) => {
    "use strict";
    var rankUtil = require_util2();
    var longestPath = rankUtil.longestPath;
    var feasibleTree = require_feasible_tree();
    var networkSimplex = require_network_simplex();
    module.exports = rank;
    function rank(g2) {
      switch (g2.graph().ranker) {
        case "network-simplex":
          networkSimplexRanker(g2);
          break;
        case "tight-tree":
          tightTreeRanker(g2);
          break;
        case "longest-path":
          longestPathRanker(g2);
          break;
        default:
          networkSimplexRanker(g2);
      }
    }
    var longestPathRanker = longestPath;
    function tightTreeRanker(g2) {
      longestPath(g2);
      feasibleTree(g2);
    }
    function networkSimplexRanker(g2) {
      networkSimplex(g2);
    }
  });

  // node_modules/dagre/lib/parent-dummy-chains.js
  var require_parent_dummy_chains = __commonJS((exports, module) => {
    var _ = require_lodash2();
    module.exports = parentDummyChains;
    function parentDummyChains(g2) {
      var postorderNums = postorder(g2);
      _.forEach(g2.graph().dummyChains, function(v) {
        var node = g2.node(v);
        var edgeObj = node.edgeObj;
        var pathData = findPath(g2, postorderNums, edgeObj.v, edgeObj.w);
        var path = pathData.path;
        var lca = pathData.lca;
        var pathIdx = 0;
        var pathV = path[pathIdx];
        var ascending = true;
        while (v !== edgeObj.w) {
          node = g2.node(v);
          if (ascending) {
            while ((pathV = path[pathIdx]) !== lca && g2.node(pathV).maxRank < node.rank) {
              pathIdx++;
            }
            if (pathV === lca) {
              ascending = false;
            }
          }
          if (!ascending) {
            while (pathIdx < path.length - 1 && g2.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
              pathIdx++;
            }
            pathV = path[pathIdx];
          }
          g2.setParent(v, pathV);
          v = g2.successors(v)[0];
        }
      });
    }
    function findPath(g2, postorderNums, v, w2) {
      var vPath = [];
      var wPath = [];
      var low = Math.min(postorderNums[v].low, postorderNums[w2].low);
      var lim = Math.max(postorderNums[v].lim, postorderNums[w2].lim);
      var parent;
      var lca;
      parent = v;
      do {
        parent = g2.parent(parent);
        vPath.push(parent);
      } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
      lca = parent;
      parent = w2;
      while ((parent = g2.parent(parent)) !== lca) {
        wPath.push(parent);
      }
      return {path: vPath.concat(wPath.reverse()), lca};
    }
    function postorder(g2) {
      var result = {};
      var lim = 0;
      function dfs(v) {
        var low = lim;
        _.forEach(g2.children(v), dfs);
        result[v] = {low, lim: lim++};
      }
      _.forEach(g2.children(), dfs);
      return result;
    }
  });

  // node_modules/dagre/lib/nesting-graph.js
  var require_nesting_graph = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var util = require_util();
    module.exports = {
      run,
      cleanup
    };
    function run(g2) {
      var root = util.addDummyNode(g2, "root", {}, "_root");
      var depths = treeDepths(g2);
      var height = _.max(_.values(depths)) - 1;
      var nodeSep = 2 * height + 1;
      g2.graph().nestingRoot = root;
      _.forEach(g2.edges(), function(e) {
        g2.edge(e).minlen *= nodeSep;
      });
      var weight = sumWeights(g2) + 1;
      _.forEach(g2.children(), function(child) {
        dfs(g2, root, nodeSep, weight, height, depths, child);
      });
      g2.graph().nodeRankFactor = nodeSep;
    }
    function dfs(g2, root, nodeSep, weight, height, depths, v) {
      var children = g2.children(v);
      if (!children.length) {
        if (v !== root) {
          g2.setEdge(root, v, {weight: 0, minlen: nodeSep});
        }
        return;
      }
      var top = util.addBorderNode(g2, "_bt");
      var bottom = util.addBorderNode(g2, "_bb");
      var label = g2.node(v);
      g2.setParent(top, v);
      label.borderTop = top;
      g2.setParent(bottom, v);
      label.borderBottom = bottom;
      _.forEach(children, function(child) {
        dfs(g2, root, nodeSep, weight, height, depths, child);
        var childNode = g2.node(child);
        var childTop = childNode.borderTop ? childNode.borderTop : child;
        var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
        var thisWeight = childNode.borderTop ? weight : 2 * weight;
        var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g2.setEdge(top, childTop, {
          weight: thisWeight,
          minlen,
          nestingEdge: true
        });
        g2.setEdge(childBottom, bottom, {
          weight: thisWeight,
          minlen,
          nestingEdge: true
        });
      });
      if (!g2.parent(v)) {
        g2.setEdge(root, top, {weight: 0, minlen: height + depths[v]});
      }
    }
    function treeDepths(g2) {
      var depths = {};
      function dfs2(v, depth) {
        var children = g2.children(v);
        if (children && children.length) {
          _.forEach(children, function(child) {
            dfs2(child, depth + 1);
          });
        }
        depths[v] = depth;
      }
      _.forEach(g2.children(), function(v) {
        dfs2(v, 1);
      });
      return depths;
    }
    function sumWeights(g2) {
      return _.reduce(g2.edges(), function(acc, e) {
        return acc + g2.edge(e).weight;
      }, 0);
    }
    function cleanup(g2) {
      var graphLabel = g2.graph();
      g2.removeNode(graphLabel.nestingRoot);
      delete graphLabel.nestingRoot;
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        if (edge.nestingEdge) {
          g2.removeEdge(e);
        }
      });
    }
  });

  // node_modules/dagre/lib/add-border-segments.js
  var require_add_border_segments = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var util = require_util();
    module.exports = addBorderSegments;
    function addBorderSegments(g2) {
      function dfs(v) {
        var children = g2.children(v);
        var node = g2.node(v);
        if (children.length) {
          _.forEach(children, dfs);
        }
        if (_.has(node, "minRank")) {
          node.borderLeft = [];
          node.borderRight = [];
          for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
            addBorderNode(g2, "borderLeft", "_bl", v, node, rank);
            addBorderNode(g2, "borderRight", "_br", v, node, rank);
          }
        }
      }
      _.forEach(g2.children(), dfs);
    }
    function addBorderNode(g2, prop, prefix, sg, sgNode, rank) {
      var label = {width: 0, height: 0, rank, borderType: prop};
      var prev = sgNode[prop][rank - 1];
      var curr = util.addDummyNode(g2, "border", label, prefix);
      sgNode[prop][rank] = curr;
      g2.setParent(curr, sg);
      if (prev) {
        g2.setEdge(prev, curr, {weight: 1});
      }
    }
  });

  // node_modules/dagre/lib/coordinate-system.js
  var require_coordinate_system = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    module.exports = {
      adjust,
      undo
    };
    function adjust(g2) {
      var rankDir = g2.graph().rankdir.toLowerCase();
      if (rankDir === "lr" || rankDir === "rl") {
        swapWidthHeight(g2);
      }
    }
    function undo(g2) {
      var rankDir = g2.graph().rankdir.toLowerCase();
      if (rankDir === "bt" || rankDir === "rl") {
        reverseY(g2);
      }
      if (rankDir === "lr" || rankDir === "rl") {
        swapXY(g2);
        swapWidthHeight(g2);
      }
    }
    function swapWidthHeight(g2) {
      _.forEach(g2.nodes(), function(v) {
        swapWidthHeightOne(g2.node(v));
      });
      _.forEach(g2.edges(), function(e) {
        swapWidthHeightOne(g2.edge(e));
      });
    }
    function swapWidthHeightOne(attrs) {
      var w2 = attrs.width;
      attrs.width = attrs.height;
      attrs.height = w2;
    }
    function reverseY(g2) {
      _.forEach(g2.nodes(), function(v) {
        reverseYOne(g2.node(v));
      });
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        _.forEach(edge.points, reverseYOne);
        if (_.has(edge, "y")) {
          reverseYOne(edge);
        }
      });
    }
    function reverseYOne(attrs) {
      attrs.y = -attrs.y;
    }
    function swapXY(g2) {
      _.forEach(g2.nodes(), function(v) {
        swapXYOne(g2.node(v));
      });
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        _.forEach(edge.points, swapXYOne);
        if (_.has(edge, "x")) {
          swapXYOne(edge);
        }
      });
    }
    function swapXYOne(attrs) {
      var x = attrs.x;
      attrs.x = attrs.y;
      attrs.y = x;
    }
  });

  // node_modules/dagre/lib/order/init-order.js
  var require_init_order = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    module.exports = initOrder;
    function initOrder(g2) {
      var visited = {};
      var simpleNodes = _.filter(g2.nodes(), function(v) {
        return !g2.children(v).length;
      });
      var maxRank = _.max(_.map(simpleNodes, function(v) {
        return g2.node(v).rank;
      }));
      var layers = _.map(_.range(maxRank + 1), function() {
        return [];
      });
      function dfs(v) {
        if (_.has(visited, v))
          return;
        visited[v] = true;
        var node = g2.node(v);
        layers[node.rank].push(v);
        _.forEach(g2.successors(v), dfs);
      }
      var orderedVs = _.sortBy(simpleNodes, function(v) {
        return g2.node(v).rank;
      });
      _.forEach(orderedVs, dfs);
      return layers;
    }
  });

  // node_modules/dagre/lib/order/cross-count.js
  var require_cross_count = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    module.exports = crossCount;
    function crossCount(g2, layering) {
      var cc = 0;
      for (var i = 1; i < layering.length; ++i) {
        cc += twoLayerCrossCount(g2, layering[i - 1], layering[i]);
      }
      return cc;
    }
    function twoLayerCrossCount(g2, northLayer, southLayer) {
      var southPos = _.zipObject(southLayer, _.map(southLayer, function(v, i) {
        return i;
      }));
      var southEntries = _.flatten(_.map(northLayer, function(v) {
        return _.sortBy(_.map(g2.outEdges(v), function(e) {
          return {pos: southPos[e.w], weight: g2.edge(e).weight};
        }), "pos");
      }), true);
      var firstIndex = 1;
      while (firstIndex < southLayer.length)
        firstIndex <<= 1;
      var treeSize = 2 * firstIndex - 1;
      firstIndex -= 1;
      var tree = _.map(new Array(treeSize), function() {
        return 0;
      });
      var cc = 0;
      _.forEach(southEntries.forEach(function(entry) {
        var index = entry.pos + firstIndex;
        tree[index] += entry.weight;
        var weightSum = 0;
        while (index > 0) {
          if (index % 2) {
            weightSum += tree[index + 1];
          }
          index = index - 1 >> 1;
          tree[index] += entry.weight;
        }
        cc += entry.weight * weightSum;
      }));
      return cc;
    }
  });

  // node_modules/dagre/lib/order/barycenter.js
  var require_barycenter = __commonJS((exports, module) => {
    var _ = require_lodash2();
    module.exports = barycenter;
    function barycenter(g2, movable) {
      return _.map(movable, function(v) {
        var inV = g2.inEdges(v);
        if (!inV.length) {
          return {v};
        } else {
          var result = _.reduce(inV, function(acc, e) {
            var edge = g2.edge(e), nodeU = g2.node(e.v);
            return {
              sum: acc.sum + edge.weight * nodeU.order,
              weight: acc.weight + edge.weight
            };
          }, {sum: 0, weight: 0});
          return {
            v,
            barycenter: result.sum / result.weight,
            weight: result.weight
          };
        }
      });
    }
  });

  // node_modules/dagre/lib/order/resolve-conflicts.js
  var require_resolve_conflicts = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    module.exports = resolveConflicts;
    function resolveConflicts(entries, cg) {
      var mappedEntries = {};
      _.forEach(entries, function(entry, i) {
        var tmp = mappedEntries[entry.v] = {
          indegree: 0,
          in: [],
          out: [],
          vs: [entry.v],
          i
        };
        if (!_.isUndefined(entry.barycenter)) {
          tmp.barycenter = entry.barycenter;
          tmp.weight = entry.weight;
        }
      });
      _.forEach(cg.edges(), function(e) {
        var entryV = mappedEntries[e.v];
        var entryW = mappedEntries[e.w];
        if (!_.isUndefined(entryV) && !_.isUndefined(entryW)) {
          entryW.indegree++;
          entryV.out.push(mappedEntries[e.w]);
        }
      });
      var sourceSet = _.filter(mappedEntries, function(entry) {
        return !entry.indegree;
      });
      return doResolveConflicts(sourceSet);
    }
    function doResolveConflicts(sourceSet) {
      var entries = [];
      function handleIn(vEntry) {
        return function(uEntry) {
          if (uEntry.merged) {
            return;
          }
          if (_.isUndefined(uEntry.barycenter) || _.isUndefined(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) {
            mergeEntries(vEntry, uEntry);
          }
        };
      }
      function handleOut(vEntry) {
        return function(wEntry) {
          wEntry["in"].push(vEntry);
          if (--wEntry.indegree === 0) {
            sourceSet.push(wEntry);
          }
        };
      }
      while (sourceSet.length) {
        var entry = sourceSet.pop();
        entries.push(entry);
        _.forEach(entry["in"].reverse(), handleIn(entry));
        _.forEach(entry.out, handleOut(entry));
      }
      return _.map(_.filter(entries, function(entry2) {
        return !entry2.merged;
      }), function(entry2) {
        return _.pick(entry2, ["vs", "i", "barycenter", "weight"]);
      });
    }
    function mergeEntries(target, source) {
      var sum = 0;
      var weight = 0;
      if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
      }
      if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
      }
      target.vs = source.vs.concat(target.vs);
      target.barycenter = sum / weight;
      target.weight = weight;
      target.i = Math.min(source.i, target.i);
      source.merged = true;
    }
  });

  // node_modules/dagre/lib/order/sort.js
  var require_sort = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var util = require_util();
    module.exports = sort;
    function sort(entries, biasRight) {
      var parts = util.partition(entries, function(entry) {
        return _.has(entry, "barycenter");
      });
      var sortable = parts.lhs, unsortable = _.sortBy(parts.rhs, function(entry) {
        return -entry.i;
      }), vs = [], sum = 0, weight = 0, vsIndex = 0;
      sortable.sort(compareWithBias(!!biasRight));
      vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
      _.forEach(sortable, function(entry) {
        vsIndex += entry.vs.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
      });
      var result = {vs: _.flatten(vs, true)};
      if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
      }
      return result;
    }
    function consumeUnsortable(vs, unsortable, index) {
      var last;
      while (unsortable.length && (last = _.last(unsortable)).i <= index) {
        unsortable.pop();
        vs.push(last.vs);
        index++;
      }
      return index;
    }
    function compareWithBias(bias) {
      return function(entryV, entryW) {
        if (entryV.barycenter < entryW.barycenter) {
          return -1;
        } else if (entryV.barycenter > entryW.barycenter) {
          return 1;
        }
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
      };
    }
  });

  // node_modules/dagre/lib/order/sort-subgraph.js
  var require_sort_subgraph = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var barycenter = require_barycenter();
    var resolveConflicts = require_resolve_conflicts();
    var sort = require_sort();
    module.exports = sortSubgraph;
    function sortSubgraph(g2, v, cg, biasRight) {
      var movable = g2.children(v);
      var node = g2.node(v);
      var bl = node ? node.borderLeft : void 0;
      var br = node ? node.borderRight : void 0;
      var subgraphs = {};
      if (bl) {
        movable = _.filter(movable, function(w2) {
          return w2 !== bl && w2 !== br;
        });
      }
      var barycenters = barycenter(g2, movable);
      _.forEach(barycenters, function(entry) {
        if (g2.children(entry.v).length) {
          var subgraphResult = sortSubgraph(g2, entry.v, cg, biasRight);
          subgraphs[entry.v] = subgraphResult;
          if (_.has(subgraphResult, "barycenter")) {
            mergeBarycenters(entry, subgraphResult);
          }
        }
      });
      var entries = resolveConflicts(barycenters, cg);
      expandSubgraphs(entries, subgraphs);
      var result = sort(entries, biasRight);
      if (bl) {
        result.vs = _.flatten([bl, result.vs, br], true);
        if (g2.predecessors(bl).length) {
          var blPred = g2.node(g2.predecessors(bl)[0]), brPred = g2.node(g2.predecessors(br)[0]);
          if (!_.has(result, "barycenter")) {
            result.barycenter = 0;
            result.weight = 0;
          }
          result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
          result.weight += 2;
        }
      }
      return result;
    }
    function expandSubgraphs(entries, subgraphs) {
      _.forEach(entries, function(entry) {
        entry.vs = _.flatten(entry.vs.map(function(v) {
          if (subgraphs[v]) {
            return subgraphs[v].vs;
          }
          return v;
        }), true);
      });
    }
    function mergeBarycenters(target, other) {
      if (!_.isUndefined(target.barycenter)) {
        target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
        target.weight += other.weight;
      } else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
      }
    }
  });

  // node_modules/dagre/lib/order/build-layer-graph.js
  var require_build_layer_graph = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    module.exports = buildLayerGraph;
    function buildLayerGraph(g2, rank, relationship) {
      var root = createRootNode(g2), result = new Graph({compound: true}).setGraph({root}).setDefaultNodeLabel(function(v) {
        return g2.node(v);
      });
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v), parent = g2.parent(v);
        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
          result.setNode(v);
          result.setParent(v, parent || root);
          _.forEach(g2[relationship](v), function(e) {
            var u2 = e.v === v ? e.w : e.v, edge = result.edge(u2, v), weight = !_.isUndefined(edge) ? edge.weight : 0;
            result.setEdge(u2, v, {weight: g2.edge(e).weight + weight});
          });
          if (_.has(node, "minRank")) {
            result.setNode(v, {
              borderLeft: node.borderLeft[rank],
              borderRight: node.borderRight[rank]
            });
          }
        }
      });
      return result;
    }
    function createRootNode(g2) {
      var v;
      while (g2.hasNode(v = _.uniqueId("_root")))
        ;
      return v;
    }
  });

  // node_modules/dagre/lib/order/add-subgraph-constraints.js
  var require_add_subgraph_constraints = __commonJS((exports, module) => {
    var _ = require_lodash2();
    module.exports = addSubgraphConstraints;
    function addSubgraphConstraints(g2, cg, vs) {
      var prev = {}, rootPrev;
      _.forEach(vs, function(v) {
        var child = g2.parent(v), parent, prevChild;
        while (child) {
          parent = g2.parent(child);
          if (parent) {
            prevChild = prev[parent];
            prev[parent] = child;
          } else {
            prevChild = rootPrev;
            rootPrev = child;
          }
          if (prevChild && prevChild !== child) {
            cg.setEdge(prevChild, child);
            return;
          }
          child = parent;
        }
      });
    }
  });

  // node_modules/dagre/lib/order/index.js
  var require_order = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var initOrder = require_init_order();
    var crossCount = require_cross_count();
    var sortSubgraph = require_sort_subgraph();
    var buildLayerGraph = require_build_layer_graph();
    var addSubgraphConstraints = require_add_subgraph_constraints();
    var Graph = require_graphlib2().Graph;
    var util = require_util();
    module.exports = order;
    function order(g2) {
      var maxRank = util.maxRank(g2), downLayerGraphs = buildLayerGraphs(g2, _.range(1, maxRank + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g2, _.range(maxRank - 1, -1, -1), "outEdges");
      var layering = initOrder(g2);
      assignOrder(g2, layering);
      var bestCC = Number.POSITIVE_INFINITY, best;
      for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
        sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
        layering = util.buildLayerMatrix(g2);
        var cc = crossCount(g2, layering);
        if (cc < bestCC) {
          lastBest = 0;
          best = _.cloneDeep(layering);
          bestCC = cc;
        }
      }
      assignOrder(g2, best);
    }
    function buildLayerGraphs(g2, ranks, relationship) {
      return _.map(ranks, function(rank) {
        return buildLayerGraph(g2, rank, relationship);
      });
    }
    function sweepLayerGraphs(layerGraphs, biasRight) {
      var cg = new Graph();
      _.forEach(layerGraphs, function(lg) {
        var root = lg.graph().root;
        var sorted = sortSubgraph(lg, root, cg, biasRight);
        _.forEach(sorted.vs, function(v, i) {
          lg.node(v).order = i;
        });
        addSubgraphConstraints(lg, cg, sorted.vs);
      });
    }
    function assignOrder(g2, layering) {
      _.forEach(layering, function(layer) {
        _.forEach(layer, function(v, i) {
          g2.node(v).order = i;
        });
      });
    }
  });

  // node_modules/dagre/lib/position/bk.js
  var require_bk = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var Graph = require_graphlib2().Graph;
    var util = require_util();
    module.exports = {
      positionX,
      findType1Conflicts,
      findType2Conflicts,
      addConflict,
      hasConflict,
      verticalAlignment,
      horizontalCompaction,
      alignCoordinates,
      findSmallestWidthAlignment,
      balance
    };
    function findType1Conflicts(g2, layering) {
      var conflicts = {};
      function visitLayer(prevLayer, layer) {
        var k0 = 0, scanPos = 0, prevLayerLength = prevLayer.length, lastNode = _.last(layer);
        _.forEach(layer, function(v, i) {
          var w2 = findOtherInnerSegmentNode(g2, v), k1 = w2 ? g2.node(w2).order : prevLayerLength;
          if (w2 || v === lastNode) {
            _.forEach(layer.slice(scanPos, i + 1), function(scanNode) {
              _.forEach(g2.predecessors(scanNode), function(u2) {
                var uLabel = g2.node(u2), uPos = uLabel.order;
                if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g2.node(scanNode).dummy)) {
                  addConflict(conflicts, u2, scanNode);
                }
              });
            });
            scanPos = i + 1;
            k0 = k1;
          }
        });
        return layer;
      }
      _.reduce(layering, visitLayer);
      return conflicts;
    }
    function findType2Conflicts(g2, layering) {
      var conflicts = {};
      function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        var v;
        _.forEach(_.range(southPos, southEnd), function(i) {
          v = south[i];
          if (g2.node(v).dummy) {
            _.forEach(g2.predecessors(v), function(u2) {
              var uNode = g2.node(u2);
              if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
                addConflict(conflicts, u2, v);
              }
            });
          }
        });
      }
      function visitLayer(north, south) {
        var prevNorthPos = -1, nextNorthPos, southPos = 0;
        _.forEach(south, function(v, southLookahead) {
          if (g2.node(v).dummy === "border") {
            var predecessors = g2.predecessors(v);
            if (predecessors.length) {
              nextNorthPos = g2.node(predecessors[0]).order;
              scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
              southPos = southLookahead;
              prevNorthPos = nextNorthPos;
            }
          }
          scan(south, southPos, south.length, nextNorthPos, north.length);
        });
        return south;
      }
      _.reduce(layering, visitLayer);
      return conflicts;
    }
    function findOtherInnerSegmentNode(g2, v) {
      if (g2.node(v).dummy) {
        return _.find(g2.predecessors(v), function(u2) {
          return g2.node(u2).dummy;
        });
      }
    }
    function addConflict(conflicts, v, w2) {
      if (v > w2) {
        var tmp = v;
        v = w2;
        w2 = tmp;
      }
      var conflictsV = conflicts[v];
      if (!conflictsV) {
        conflicts[v] = conflictsV = {};
      }
      conflictsV[w2] = true;
    }
    function hasConflict(conflicts, v, w2) {
      if (v > w2) {
        var tmp = v;
        v = w2;
        w2 = tmp;
      }
      return _.has(conflicts[v], w2);
    }
    function verticalAlignment(g2, layering, conflicts, neighborFn) {
      var root = {}, align = {}, pos = {};
      _.forEach(layering, function(layer) {
        _.forEach(layer, function(v, order) {
          root[v] = v;
          align[v] = v;
          pos[v] = order;
        });
      });
      _.forEach(layering, function(layer) {
        var prevIdx = -1;
        _.forEach(layer, function(v) {
          var ws = neighborFn(v);
          if (ws.length) {
            ws = _.sortBy(ws, function(w3) {
              return pos[w3];
            });
            var mp = (ws.length - 1) / 2;
            for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
              var w2 = ws[i];
              if (align[v] === v && prevIdx < pos[w2] && !hasConflict(conflicts, v, w2)) {
                align[w2] = v;
                align[v] = root[v] = root[w2];
                prevIdx = pos[w2];
              }
            }
          }
        });
      });
      return {root, align};
    }
    function horizontalCompaction(g2, layering, root, align, reverseSep) {
      var xs = {}, blockG = buildBlockGraph(g2, layering, root, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
      function iterate(setXsFunc, nextNodesFunc) {
        var stack = blockG.nodes();
        var elem = stack.pop();
        var visited = {};
        while (elem) {
          if (visited[elem]) {
            setXsFunc(elem);
          } else {
            visited[elem] = true;
            stack.push(elem);
            stack = stack.concat(nextNodesFunc(elem));
          }
          elem = stack.pop();
        }
      }
      function pass1(elem) {
        xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
          return Math.max(acc, xs[e.v] + blockG.edge(e));
        }, 0);
      }
      function pass2(elem) {
        var min = blockG.outEdges(elem).reduce(function(acc, e) {
          return Math.min(acc, xs[e.w] - blockG.edge(e));
        }, Number.POSITIVE_INFINITY);
        var node = g2.node(elem);
        if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
          xs[elem] = Math.max(xs[elem], min);
        }
      }
      iterate(pass1, blockG.predecessors.bind(blockG));
      iterate(pass2, blockG.successors.bind(blockG));
      _.forEach(align, function(v) {
        xs[v] = xs[root[v]];
      });
      return xs;
    }
    function buildBlockGraph(g2, layering, root, reverseSep) {
      var blockGraph = new Graph(), graphLabel = g2.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
      _.forEach(layering, function(layer) {
        var u2;
        _.forEach(layer, function(v) {
          var vRoot = root[v];
          blockGraph.setNode(vRoot);
          if (u2) {
            var uRoot = root[u2], prevMax = blockGraph.edge(uRoot, vRoot);
            blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g2, v, u2), prevMax || 0));
          }
          u2 = v;
        });
      });
      return blockGraph;
    }
    function findSmallestWidthAlignment(g2, xss) {
      return _.minBy(_.values(xss), function(xs) {
        var max = Number.NEGATIVE_INFINITY;
        var min = Number.POSITIVE_INFINITY;
        _.forIn(xs, function(x, v) {
          var halfWidth = width(g2, v) / 2;
          max = Math.max(x + halfWidth, max);
          min = Math.min(x - halfWidth, min);
        });
        return max - min;
      });
    }
    function alignCoordinates(xss, alignTo) {
      var alignToVals = _.values(alignTo), alignToMin = _.min(alignToVals), alignToMax = _.max(alignToVals);
      _.forEach(["u", "d"], function(vert) {
        _.forEach(["l", "r"], function(horiz) {
          var alignment = vert + horiz, xs = xss[alignment], delta;
          if (xs === alignTo)
            return;
          var xsVals = _.values(xs);
          delta = horiz === "l" ? alignToMin - _.min(xsVals) : alignToMax - _.max(xsVals);
          if (delta) {
            xss[alignment] = _.mapValues(xs, function(x) {
              return x + delta;
            });
          }
        });
      });
    }
    function balance(xss, align) {
      return _.mapValues(xss.ul, function(ignore, v) {
        if (align) {
          return xss[align.toLowerCase()][v];
        } else {
          var xs = _.sortBy(_.map(xss, v));
          return (xs[1] + xs[2]) / 2;
        }
      });
    }
    function positionX(g2) {
      var layering = util.buildLayerMatrix(g2);
      var conflicts = _.merge(findType1Conflicts(g2, layering), findType2Conflicts(g2, layering));
      var xss = {};
      var adjustedLayering;
      _.forEach(["u", "d"], function(vert) {
        adjustedLayering = vert === "u" ? layering : _.values(layering).reverse();
        _.forEach(["l", "r"], function(horiz) {
          if (horiz === "r") {
            adjustedLayering = _.map(adjustedLayering, function(inner) {
              return _.values(inner).reverse();
            });
          }
          var neighborFn = (vert === "u" ? g2.predecessors : g2.successors).bind(g2);
          var align = verticalAlignment(g2, adjustedLayering, conflicts, neighborFn);
          var xs = horizontalCompaction(g2, adjustedLayering, align.root, align.align, horiz === "r");
          if (horiz === "r") {
            xs = _.mapValues(xs, function(x) {
              return -x;
            });
          }
          xss[vert + horiz] = xs;
        });
      });
      var smallestWidth = findSmallestWidthAlignment(g2, xss);
      alignCoordinates(xss, smallestWidth);
      return balance(xss, g2.graph().align);
    }
    function sep(nodeSep, edgeSep, reverseSep) {
      return function(g2, v, w2) {
        var vLabel = g2.node(v);
        var wLabel = g2.node(w2);
        var sum = 0;
        var delta;
        sum += vLabel.width / 2;
        if (_.has(vLabel, "labelpos")) {
          switch (vLabel.labelpos.toLowerCase()) {
            case "l":
              delta = -vLabel.width / 2;
              break;
            case "r":
              delta = vLabel.width / 2;
              break;
          }
        }
        if (delta) {
          sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.width / 2;
        if (_.has(wLabel, "labelpos")) {
          switch (wLabel.labelpos.toLowerCase()) {
            case "l":
              delta = wLabel.width / 2;
              break;
            case "r":
              delta = -wLabel.width / 2;
              break;
          }
        }
        if (delta) {
          sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        return sum;
      };
    }
    function width(g2, v) {
      return g2.node(v).width;
    }
  });

  // node_modules/dagre/lib/position/index.js
  var require_position = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var util = require_util();
    var positionX = require_bk().positionX;
    module.exports = position;
    function position(g2) {
      g2 = util.asNonCompoundGraph(g2);
      positionY(g2);
      _.forEach(positionX(g2), function(x, v) {
        g2.node(v).x = x;
      });
    }
    function positionY(g2) {
      var layering = util.buildLayerMatrix(g2);
      var rankSep = g2.graph().ranksep;
      var prevY = 0;
      _.forEach(layering, function(layer) {
        var maxHeight = _.max(_.map(layer, function(v) {
          return g2.node(v).height;
        }));
        _.forEach(layer, function(v) {
          g2.node(v).y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + rankSep;
      });
    }
  });

  // node_modules/dagre/lib/layout.js
  var require_layout = __commonJS((exports, module) => {
    "use strict";
    var _ = require_lodash2();
    var acyclic = require_acyclic();
    var normalize = require_normalize();
    var rank = require_rank();
    var normalizeRanks = require_util().normalizeRanks;
    var parentDummyChains = require_parent_dummy_chains();
    var removeEmptyRanks = require_util().removeEmptyRanks;
    var nestingGraph = require_nesting_graph();
    var addBorderSegments = require_add_border_segments();
    var coordinateSystem = require_coordinate_system();
    var order = require_order();
    var position = require_position();
    var util = require_util();
    var Graph = require_graphlib2().Graph;
    module.exports = layout;
    function layout(g2, opts) {
      var time2 = opts && opts.debugTiming ? util.time : util.notime;
      time2("layout", function() {
        var layoutGraph = time2("  buildLayoutGraph", function() {
          return buildLayoutGraph(g2);
        });
        time2("  runLayout", function() {
          runLayout(layoutGraph, time2);
        });
        time2("  updateInputGraph", function() {
          updateInputGraph(g2, layoutGraph);
        });
      });
    }
    function runLayout(g2, time2) {
      time2("    makeSpaceForEdgeLabels", function() {
        makeSpaceForEdgeLabels(g2);
      });
      time2("    removeSelfEdges", function() {
        removeSelfEdges(g2);
      });
      time2("    acyclic", function() {
        acyclic.run(g2);
      });
      time2("    nestingGraph.run", function() {
        nestingGraph.run(g2);
      });
      time2("    rank", function() {
        rank(util.asNonCompoundGraph(g2));
      });
      time2("    injectEdgeLabelProxies", function() {
        injectEdgeLabelProxies(g2);
      });
      time2("    removeEmptyRanks", function() {
        removeEmptyRanks(g2);
      });
      time2("    nestingGraph.cleanup", function() {
        nestingGraph.cleanup(g2);
      });
      time2("    normalizeRanks", function() {
        normalizeRanks(g2);
      });
      time2("    assignRankMinMax", function() {
        assignRankMinMax(g2);
      });
      time2("    removeEdgeLabelProxies", function() {
        removeEdgeLabelProxies(g2);
      });
      time2("    normalize.run", function() {
        normalize.run(g2);
      });
      time2("    parentDummyChains", function() {
        parentDummyChains(g2);
      });
      time2("    addBorderSegments", function() {
        addBorderSegments(g2);
      });
      time2("    order", function() {
        order(g2);
      });
      time2("    insertSelfEdges", function() {
        insertSelfEdges(g2);
      });
      time2("    adjustCoordinateSystem", function() {
        coordinateSystem.adjust(g2);
      });
      time2("    position", function() {
        position(g2);
      });
      time2("    positionSelfEdges", function() {
        positionSelfEdges(g2);
      });
      time2("    removeBorderNodes", function() {
        removeBorderNodes(g2);
      });
      time2("    normalize.undo", function() {
        normalize.undo(g2);
      });
      time2("    fixupEdgeLabelCoords", function() {
        fixupEdgeLabelCoords(g2);
      });
      time2("    undoCoordinateSystem", function() {
        coordinateSystem.undo(g2);
      });
      time2("    translateGraph", function() {
        translateGraph(g2);
      });
      time2("    assignNodeIntersects", function() {
        assignNodeIntersects(g2);
      });
      time2("    reversePoints", function() {
        reversePointsForReversedEdges(g2);
      });
      time2("    acyclic.undo", function() {
        acyclic.undo(g2);
      });
    }
    function updateInputGraph(inputGraph, layoutGraph) {
      _.forEach(inputGraph.nodes(), function(v) {
        var inputLabel = inputGraph.node(v);
        var layoutLabel = layoutGraph.node(v);
        if (inputLabel) {
          inputLabel.x = layoutLabel.x;
          inputLabel.y = layoutLabel.y;
          if (layoutGraph.children(v).length) {
            inputLabel.width = layoutLabel.width;
            inputLabel.height = layoutLabel.height;
          }
        }
      });
      _.forEach(inputGraph.edges(), function(e) {
        var inputLabel = inputGraph.edge(e);
        var layoutLabel = layoutGraph.edge(e);
        inputLabel.points = layoutLabel.points;
        if (_.has(layoutLabel, "x")) {
          inputLabel.x = layoutLabel.x;
          inputLabel.y = layoutLabel.y;
        }
      });
      inputGraph.graph().width = layoutGraph.graph().width;
      inputGraph.graph().height = layoutGraph.graph().height;
    }
    var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
    var graphDefaults = {ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb"};
    var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
    var nodeNumAttrs = ["width", "height"];
    var nodeDefaults = {width: 0, height: 0};
    var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
    var edgeDefaults = {
      minlen: 1,
      weight: 1,
      width: 0,
      height: 0,
      labeloffset: 10,
      labelpos: "r"
    };
    var edgeAttrs = ["labelpos"];
    function buildLayoutGraph(inputGraph) {
      var g2 = new Graph({multigraph: true, compound: true});
      var graph = canonicalize(inputGraph.graph());
      g2.setGraph(_.merge({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), _.pick(graph, graphAttrs)));
      _.forEach(inputGraph.nodes(), function(v) {
        var node = canonicalize(inputGraph.node(v));
        g2.setNode(v, _.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
        g2.setParent(v, inputGraph.parent(v));
      });
      _.forEach(inputGraph.edges(), function(e) {
        var edge = canonicalize(inputGraph.edge(e));
        g2.setEdge(e, _.merge({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), _.pick(edge, edgeAttrs)));
      });
      return g2;
    }
    function makeSpaceForEdgeLabels(g2) {
      var graph = g2.graph();
      graph.ranksep /= 2;
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        edge.minlen *= 2;
        if (edge.labelpos.toLowerCase() !== "c") {
          if (graph.rankdir === "TB" || graph.rankdir === "BT") {
            edge.width += edge.labeloffset;
          } else {
            edge.height += edge.labeloffset;
          }
        }
      });
    }
    function injectEdgeLabelProxies(g2) {
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        if (edge.width && edge.height) {
          var v = g2.node(e.v);
          var w2 = g2.node(e.w);
          var label = {rank: (w2.rank - v.rank) / 2 + v.rank, e};
          util.addDummyNode(g2, "edge-proxy", label, "_ep");
        }
      });
    }
    function assignRankMinMax(g2) {
      var maxRank = 0;
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        if (node.borderTop) {
          node.minRank = g2.node(node.borderTop).rank;
          node.maxRank = g2.node(node.borderBottom).rank;
          maxRank = _.max(maxRank, node.maxRank);
        }
      });
      g2.graph().maxRank = maxRank;
    }
    function removeEdgeLabelProxies(g2) {
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        if (node.dummy === "edge-proxy") {
          g2.edge(node.e).labelRank = node.rank;
          g2.removeNode(v);
        }
      });
    }
    function translateGraph(g2) {
      var minX = Number.POSITIVE_INFINITY;
      var maxX = 0;
      var minY = Number.POSITIVE_INFINITY;
      var maxY = 0;
      var graphLabel = g2.graph();
      var marginX = graphLabel.marginx || 0;
      var marginY = graphLabel.marginy || 0;
      function getExtremes(attrs) {
        var x = attrs.x;
        var y = attrs.y;
        var w2 = attrs.width;
        var h3 = attrs.height;
        minX = Math.min(minX, x - w2 / 2);
        maxX = Math.max(maxX, x + w2 / 2);
        minY = Math.min(minY, y - h3 / 2);
        maxY = Math.max(maxY, y + h3 / 2);
      }
      _.forEach(g2.nodes(), function(v) {
        getExtremes(g2.node(v));
      });
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        if (_.has(edge, "x")) {
          getExtremes(edge);
        }
      });
      minX -= marginX;
      minY -= marginY;
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        node.x -= minX;
        node.y -= minY;
      });
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        _.forEach(edge.points, function(p) {
          p.x -= minX;
          p.y -= minY;
        });
        if (_.has(edge, "x")) {
          edge.x -= minX;
        }
        if (_.has(edge, "y")) {
          edge.y -= minY;
        }
      });
      graphLabel.width = maxX - minX + marginX;
      graphLabel.height = maxY - minY + marginY;
    }
    function assignNodeIntersects(g2) {
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        var nodeV = g2.node(e.v);
        var nodeW = g2.node(e.w);
        var p1, p2;
        if (!edge.points) {
          edge.points = [];
          p1 = nodeW;
          p2 = nodeV;
        } else {
          p1 = edge.points[0];
          p2 = edge.points[edge.points.length - 1];
        }
        edge.points.unshift(util.intersectRect(nodeV, p1));
        edge.points.push(util.intersectRect(nodeW, p2));
      });
    }
    function fixupEdgeLabelCoords(g2) {
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        if (_.has(edge, "x")) {
          if (edge.labelpos === "l" || edge.labelpos === "r") {
            edge.width -= edge.labeloffset;
          }
          switch (edge.labelpos) {
            case "l":
              edge.x -= edge.width / 2 + edge.labeloffset;
              break;
            case "r":
              edge.x += edge.width / 2 + edge.labeloffset;
              break;
          }
        }
      });
    }
    function reversePointsForReversedEdges(g2) {
      _.forEach(g2.edges(), function(e) {
        var edge = g2.edge(e);
        if (edge.reversed) {
          edge.points.reverse();
        }
      });
    }
    function removeBorderNodes(g2) {
      _.forEach(g2.nodes(), function(v) {
        if (g2.children(v).length) {
          var node = g2.node(v);
          var t = g2.node(node.borderTop);
          var b = g2.node(node.borderBottom);
          var l = g2.node(_.last(node.borderLeft));
          var r = g2.node(_.last(node.borderRight));
          node.width = Math.abs(r.x - l.x);
          node.height = Math.abs(b.y - t.y);
          node.x = l.x + node.width / 2;
          node.y = t.y + node.height / 2;
        }
      });
      _.forEach(g2.nodes(), function(v) {
        if (g2.node(v).dummy === "border") {
          g2.removeNode(v);
        }
      });
    }
    function removeSelfEdges(g2) {
      _.forEach(g2.edges(), function(e) {
        if (e.v === e.w) {
          var node = g2.node(e.v);
          if (!node.selfEdges) {
            node.selfEdges = [];
          }
          node.selfEdges.push({e, label: g2.edge(e)});
          g2.removeEdge(e);
        }
      });
    }
    function insertSelfEdges(g2) {
      var layers = util.buildLayerMatrix(g2);
      _.forEach(layers, function(layer) {
        var orderShift = 0;
        _.forEach(layer, function(v, i) {
          var node = g2.node(v);
          node.order = i + orderShift;
          _.forEach(node.selfEdges, function(selfEdge) {
            util.addDummyNode(g2, "selfedge", {
              width: selfEdge.label.width,
              height: selfEdge.label.height,
              rank: node.rank,
              order: i + ++orderShift,
              e: selfEdge.e,
              label: selfEdge.label
            }, "_se");
          });
          delete node.selfEdges;
        });
      });
    }
    function positionSelfEdges(g2) {
      _.forEach(g2.nodes(), function(v) {
        var node = g2.node(v);
        if (node.dummy === "selfedge") {
          var selfNode = g2.node(node.e.v);
          var x = selfNode.x + selfNode.width / 2;
          var y = selfNode.y;
          var dx = node.x - x;
          var dy = selfNode.height / 2;
          g2.setEdge(node.e, node.label);
          g2.removeNode(v);
          node.label.points = [
            {x: x + 2 * dx / 3, y: y - dy},
            {x: x + 5 * dx / 6, y: y - dy},
            {x: x + dx, y},
            {x: x + 5 * dx / 6, y: y + dy},
            {x: x + 2 * dx / 3, y: y + dy}
          ];
          node.label.x = node.x;
          node.label.y = node.y;
        }
      });
    }
    function selectNumberAttrs(obj, attrs) {
      return _.mapValues(_.pick(obj, attrs), Number);
    }
    function canonicalize(attrs) {
      var newAttrs = {};
      _.forEach(attrs, function(v, k2) {
        newAttrs[k2.toLowerCase()] = v;
      });
      return newAttrs;
    }
  });

  // node_modules/dagre/lib/debug.js
  var require_debug = __commonJS((exports, module) => {
    var _ = require_lodash2();
    var util = require_util();
    var Graph = require_graphlib2().Graph;
    module.exports = {
      debugOrdering
    };
    function debugOrdering(g2) {
      var layerMatrix = util.buildLayerMatrix(g2);
      var h3 = new Graph({compound: true, multigraph: true}).setGraph({});
      _.forEach(g2.nodes(), function(v) {
        h3.setNode(v, {label: v});
        h3.setParent(v, "layer" + g2.node(v).rank);
      });
      _.forEach(g2.edges(), function(e) {
        h3.setEdge(e.v, e.w, {}, e.name);
      });
      _.forEach(layerMatrix, function(layer, i) {
        var layerV = "layer" + i;
        h3.setNode(layerV, {rank: "same"});
        _.reduce(layer, function(u2, v) {
          h3.setEdge(u2, v, {style: "invis"});
          return v;
        });
      });
      return h3;
    }
  });

  // node_modules/dagre/lib/version.js
  var require_version2 = __commonJS((exports, module) => {
    module.exports = "0.8.5";
  });

  // node_modules/dagre/index.js
  var require_dagre = __commonJS((exports, module) => {
    module.exports = {
      graphlib: require_graphlib2(),
      layout: require_layout(),
      debug: require_debug(),
      util: {
        time: require_util().time,
        notime: require_util().notime
      },
      version: require_version2()
    };
  });

  // ../dist/esm/index.js
  var I = Object.defineProperty;
  var w = (b, r, t) => r in b ? I(b, r, {enumerable: true, configurable: true, writable: true, value: t}) : b[r] = t;
  var u = (b, r, t) => w(b, typeof r != "symbol" ? r + "" : r, t);
  var C = {A: {args: ["rx", "ry", "rotation", "arc", "sweep", "ex", "ey"]}, a: {args: ["rx", "ry", "rotation", "arc", "sweep", "ex", "ey"]}, C: {args: ["cx1", "cy1", "cx2", "cy2", "ex", "ey"]}, c: {args: ["cx1", "cy1", "cx2", "cy2", "ex", "ey"]}, H: {args: ["x"]}, h: {args: ["x"]}, L: {args: ["x", "y"]}, l: {args: ["x", "y"]}, M: {args: ["x", "y"]}, m: {args: ["x", "y"]}, Q: {args: ["cx", "cy", "ex", "ey"]}, q: {args: ["cx", "cy", "ex", "ey"]}, S: {args: ["cx", "cy", "ex", "ey"]}, s: {args: ["cx", "cy", "ex", "ey"]}, T: {args: ["ex", "ey"]}, t: {args: ["ex", "ey"]}, V: {args: ["y"]}, v: {args: ["y"]}, z: {args: []}};
  var A = (b) => b * Math.PI / 180;
  var T = (b, r, t, n) => {
    let e = A(n);
    return {x: b + t * Math.cos(e), y: r + t * Math.sin(e)};
  };
  var S = (b, r, t, n) => {
    let e = n - 90;
    return T(b, r, t, e);
  };
  var D = (b, r, t, n, e = -0.5 * Math.PI, s = 1) => {
    b = b || 1e-10;
    let a = 2 * Math.PI * s / n, m = Array.from(Array(n >= 0 ? n : 0).keys()), o = Math.max(0, 4 - Math.floor(Math.log10(b)));
    return m.map((i, l) => {
      let c = l * a + e;
      return [parseFloat((r + b * Math.cos(c)).toFixed(o)), parseFloat((t + b * Math.sin(c)).toFixed(o))];
    });
  };
  var k = (b, r, t, n) => {
    let e = [], s = b / 2;
    return r.forEach((a, m) => {
      a.forEach((o, i) => {
        o && e.push({size: b, cx: i * b + s + t, cy: m * b + s + n, ri: m, ci: i, value: o});
      });
    }), e;
  };
  var h = class h2 {
    constructor() {
      u(this, "pathData");
      u(this, "m", (r, t) => this.moveTo(r, t, true));
      u(this, "M", (r, t) => this.moveTo(r, t));
      u(this, "l", (r, t) => this.lineTo(r, t, true));
      u(this, "L", (r, t) => this.lineTo(r, t));
      u(this, "H", (r) => this.horizontalTo(r));
      u(this, "h", (r) => this.horizontalTo(r, true));
      u(this, "V", (r) => this.verticalTo(r));
      u(this, "v", (r) => this.verticalTo(r, true));
      u(this, "Q", (r, t, n, e) => this.qCurve(r, t, n, e));
      u(this, "q", (r, t, n, e) => this.qCurve(r, t, n, e, true));
      u(this, "T", (r, t) => this.tCurveTo(r, t));
      u(this, "t", (r, t) => this.tCurveTo(r, t, true));
      u(this, "C", (r, t, n, e, s, a) => this.cCurve(r, t, n, e, s, a));
      u(this, "c", (r, t, n, e, s, a) => this.cCurve(r, t, n, e, s, a, true));
      u(this, "S", (r, t, n, e) => this.sCurveTo(r, t, n, e));
      u(this, "s", (r, t, n, e) => this.sCurveTo(r, t, n, e, true));
      u(this, "A", (r, t, n, e, s, a, m) => this.arc(r, t, n, e, s, a, m));
      u(this, "a", (r, t, n, e, s, a, m) => this.arc(r, t, n, e, s, a, m, true));
      u(this, "Z", () => this.close());
      u(this, "z", () => this.close());
      u(this, "moveTo", (r, t, n = false) => (this.pathData.push(`${n ? "m" : "M"}${r} ${t}`), this));
      u(this, "lineTo", (r, t, n = false) => (this.pathData.push(`${n ? "l" : "L"}${r} ${t}`), this));
      u(this, "horizontalTo", (r, t = false) => (this.pathData.push(`${t ? "h" : "H"}${r}`), this));
      u(this, "verticalTo", (r, t = false) => (this.pathData.push(`${t ? "v" : "V"}${r}`), this));
      u(this, "qCurve", (r, t, n, e, s = false) => (this.pathData.push(`${s ? "q" : "Q"}${r} ${t} ${n} ${e}`), this));
      u(this, "tCurveTo", (r, t, n = false) => (this.pathData.push(`${n ? "t" : "T"}${r} ${t}`), this));
      u(this, "cCurve", (r, t, n, e, s, a, m = false) => (this.pathData.push(`${m ? "c" : "C"}${r} ${t} ${n} ${e} ${s} ${a}`), this));
      u(this, "sCurveTo", (r, t, n, e, s = false) => (this.pathData.push(`${s ? "s" : "S"}${r} ${t} ${n} ${e}`), this));
      u(this, "arc", (r, t, n, e, s, a, m, o = false) => (this.pathData.push(`${o ? "a" : "A"}${r} ${t} ${n} ${e} ${s} ${a} ${m}`), this));
      u(this, "close", () => (this.pathData.push("z"), this));
      u(this, "down", (r) => this.v(r));
      u(this, "up", (r) => this.v(r * -1));
      u(this, "right", (r) => this.h(r));
      u(this, "left", (r) => this.h(r * -1));
      u(this, "toArray", () => this.pathData);
      u(this, "toString", () => this.pathData.join(""));
      u(this, "toCommands", () => this.pathData.map((r) => {
        let t = [r.substr(0, 1)], n = r.substr(1);
        return n.length && t.push(...n.split(" ").map(Number)), t;
      }));
      u(this, "toAnnotatedCommands", () => this.toCommands().map((n) => {
        let e = String(n.shift()), s = C[e]?.args;
        return s.length ? {fn: e, args: s.reduce((a, m, o) => (a[m] = n[o], a), {})} : {fn: e};
      }));
      u(this, "toElement", (r = {}) => {
        let t = {...r}, n = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return Object.keys(t).forEach((e) => {
          n.setAttribute(e, String(t[e]));
        }), n.setAttribute("d", this.toString()), n;
      });
      u(this, "circle", (r, t, n, e = true) => this.ellipse(r, r, t, n, e));
      u(this, "ellipse", (r, t, n, e, s = true) => {
        let a = r / 2, m = t / 2;
        return this.M(n + a, e).A(a, m, 0, 0, 1, n - a, e).A(a, m, 0, 0, 1, n + a, e).close(), s && this.M(n, e), this;
      });
      u(this, "kite", (r, t, n, e, s, a = true) => {
        n = n || Math.round(t * 0.33);
        let [m, o, i] = h2.radialPoints(t / 2, e, s, 4), l = Number(m[1]) + n, c = [[Number(m[0]), Number(m[1])], [e - r / 2, l], [Number(i[0]), Number(i[1])], [e + r / 2, l]];
        return this.polyline(c).close(), a && this.M(e, s), this;
      });
      u(this, "polygon", (r) => (this.polyline(r).close(), this));
      u(this, "polygram", (r, t, n, e, s = 2, a = true) => (this.polygon(h2.radialPoints(r / 2, n, e, t, void 0, s)), a && this.M(n, e), this));
      u(this, "polyline", (r, t = false) => {
        let n = [...r], e = n.shift(), s = t ? this.m : this.M, a = t ? this.l : this.L;
        return s.apply(null, e), n.forEach((m) => {
          a.apply(null, m);
        }), this;
      });
      u(this, "rect", (r, t, n, e, s = true) => (this.M(n - r / 2, e - t / 2).right(r).down(t).left(r).up(t), s && this.M(n, e), this));
      u(this, "regPolygon", (r, t, n, e, s = true) => (this.polygon(h2.radialPoints(r / 2, n, e, t)), s && this.M(n, e), this));
      u(this, "roundedRect", (r, t, n, e, s, a = true) => {
        let m = s - t / 2, o = e - r / 2, i = o + r, l = m + t, c = Math.min(n, r / 2);
        c = c < 0 ? 0 : c;
        let p = Math.min(n, t / 2);
        p = p < 0 ? 0 : p;
        let f = Math.max(r - c * 2, 0), M = Math.max(t - p * 2, 0);
        return this.M(o + c, m).right(f).A(c, p, 0, 0, 1, i, m + p).down(M).A(c, p, 0, 0, 1, i - c, l).left(f).A(c, p, 0, 0, 1, o, l - p).up(M).A(c, p, 0, 0, 1, o + c, m).M(o, m), a && this.M(e, s), this;
      });
      u(this, "roundedSquare", (r, t, n, e, s = true) => this.roundedRect(r, r, t, n, e, s));
      u(this, "square", (r, t, n, e = true) => this.rect(r, r, t, n, e));
      u(this, "star", (r, t, n, e, s, a = true) => {
        let m = t / 2, o = r / 2, i = 360 / (n * 2), c = Array.from({length: n * 2}).map((p, f) => {
          let M = f % 2 == 0 ? o : m, g2 = i * f, {x: y, y: $} = h2.clockwisePoint(e, s, M, g2);
          return [y, $];
        });
        return this.polygon(c), a && this.M(e, s), this;
      });
      u(this, "triangle", (r, t, n, e = true) => {
        let s = Math.sqrt(3), a = [t, n - s / 3 * r], m = [t - r / 2, n + s / 6 * r], o = [t + r / 2, n + s / 6 * r];
        return this.polygon([a, m, o]), e && this.M(t, n), this;
      });
      u(this, "sector", (r, t, n, e, s, a = true) => {
        let m = n / 2, o = h2.clockwisePoint(r, t, m, s), i = h2.clockwisePoint(r, t, m, e), l = s - e <= 180 ? 0 : 1;
        return this.M(o.x, o.y).A(m, m, 0, l, 0, i.x, i.y).L(r, t).L(o.x, o.y), a && this.M(r, t), this;
      });
      u(this, "segment", (r, t, n, e, s, a = true) => {
        let m = n / 2, o = h2.clockwisePoint(r, t, m, s), i = h2.clockwisePoint(r, t, m, e), l = s - e <= 180 ? 0 : 1;
        return this.M(o.x, o.y).A(m, m, 0, l, 0, i.x, i.y), a && this.M(r, t), this;
      });
      u(this, "radialLines", (r, t, n, e, s, a = true) => {
        let m = h2.radialPoints(t / 2, e, s, n), o = h2.radialPoints(r / 2, e, s, n);
        return m.forEach((i, l) => {
          this.M(i[0], i[1]).L(o[l][0], o[l][1]);
        }), a && this.M(e, s), this;
      });
      u(this, "lens", (r, t, n, e, s = true) => (this.M(n - r / 2, e).Q(n, e - t, n + r / 2, e).Q(n, e + t, n - r / 2, e), s && this.M(n, e), this));
      u(this, "omino", (r, t, n, e, s = false) => (h2.positionByArray(r, t, n, e).forEach((m, o, i) => {
        let {cx: l, cy: c, ri: p, ci: f, size: M} = m, g2 = M / 2, y = i.find((P) => P.ri === p && P.ci === f - 1), $ = i.find((P) => P.ri === p && P.ci === f + 1), x = i.find((P) => P.ri === p - 1 && P.ci === f), N = i.find((P) => P.ri === p + 1 && P.ci === f), v = l - g2, R = l + g2, d = c - g2, q = c + g2;
        (!y || s) && (this.M(v, d), this.v(M)), $ || (this.M(R, d), this.v(M)), (!x || s) && (this.M(v, d), this.h(M)), N || (this.M(v, q), this.h(M));
      }), this));
      u(this, "isocube", (r, t, n, e = true) => {
        this.regPolygon(r, 6, t, n, e);
        let s = h2.radialPoints(0 / 2, t, n, 6), a = h2.radialPoints(r / 2, t, n, 6);
        return [1, 3, 5].forEach((o) => {
          this.M(Number(s[o][0]), Number(s[o][1])).L(Number(a[o][0]), Number(a[o][1]));
        }), e && this.M(t, n), this;
      });
      u(this, "cross", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, e).L(m, e).M(n, i).L(n, o), s && this.M(n, e), this;
      });
      u(this, "symH", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(a, i).M(a, e).L(m, e).M(m, o).L(m, i), s && this.M(n, e), this;
      });
      u(this, "symI", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(m, o).M(n, o).L(n, i).M(a, i).L(m, i), s && this.M(n, e), this;
      });
      u(this, "symV", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(n, i).L(m, o), s && this.M(n, e), this;
      });
      u(this, "symX", (r, t, n, e, s = true) => {
        let a = n - r / 2, m = a + r, o = e - t / 2, i = o + t;
        return this.M(a, o).L(m, i).M(a, i).L(m, o), s && this.M(n, e), this;
      });
      return this.pathData = [], this;
    }
  };
  u(h, "angleInRadians", A), u(h, "polarToCartesian", T), u(h, "clockwisePoint", S), u(h, "radialPoints", D), u(h, "positionByArray", k), u(h, "macro", (r, t) => (h.prototype[r] = t, t));
  var L = h;

  // src/dag/dagSetup.js
  var import_dagre = __toModule(require_dagre());
  var setupDag = () => {
    var g2 = new import_dagre.default.graphlib.Graph();
    g2.setGraph({
      rankdir: "BT",
      marginx: 15,
      marginy: 50,
      nodesep: 10,
      ranksep: 50,
      edgesep: 5
    });
    g2.setDefaultEdgeLabel(function() {
      return {};
    });
    const items = "abcdefghijklmnopqrstuvwxyz".split("");
    items.forEach((item) => g2.setNode(item, {width: 25, height: 25}));
    items.forEach((item, index, arr) => {
      if (index === 0) {
        return;
      }
      if (index < 5) {
        g2.setEdge(item, "a");
      } else if (index < 9) {
        g2.setEdge(item, "b");
      } else if (index < 15) {
        g2.setEdge(item, "c");
      } else if (index < 19) {
        g2.setEdge(item, "d");
      } else {
        g2.setEdge(item, "e");
      }
    });
    import_dagre.default.layout(g2);
    return {
      nodes: g2.nodes().map((node) => g2.node(node)),
      edges: g2.edges().map((edge) => g2.edge(edge)),
      graph: g2.graph()
    };
  };
  var dagSetup_default = setupDag;

  // src/dag/dagSinglePath.js
  var dag = dagSetup_default();
  var dagSinglePath = () => {
    const {edges, nodes} = dag;
    const p = new L();
    edges.forEach(({points, x, y}) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });
    nodes.forEach(({width, height, x, y}) => {
      p.M(x - width / 2, y - height / 2).right(width).down(height).left(width).up(height);
    });
    return {
      nodes: p.toElement({stroke: "#222"}),
      w: dag.graph.width,
      h: dag.graph.height
    };
  };
  var dagSinglePath_default = dagSinglePath;

  // src/dag/dagTwoPaths.js
  var dag2 = dagSetup_default();
  var dagTwoPaths = () => {
    const createNodes = (nodes) => {
      const p = new L();
      nodes.forEach(({width, height, x, y}) => {
        p.M(x - width / 2, y - height / 2).right(width).down(height).left(width).up(height);
      });
      return p.toElement({stroke: "red"});
    };
    const createConnectors = (edges) => {
      const p = new L();
      edges.forEach(({points, x, y}) => {
        const m = points.shift();
        p.M(m.x, m.y);
        points.forEach((point) => p.L(point.x, point.y));
      });
      return p.toElement({stroke: "#222"});
    };
    return {
      nodes: createNodes(dag2.nodes),
      connectors: createConnectors(dag2.edges),
      w: dag2.graph.width,
      h: dag2.graph.height
    };
  };
  var dagTwoPaths_default = dagTwoPaths;

  // src/dag/dagNodes.js
  var dag3 = dagSetup_default();
  var square = (x, y, size, msg) => {
    const p = new L().moveTo(x, y).right(size).down(size).left(size).close();
    const node = p.toElement({
      class: "square-node"
    });
    node.onclick = alert.bind(null, msg);
    return node;
  };
  var circle = (x, y, radius, msg) => {
    const p = new L().M(x, y).m(-radius, 0).a(radius, radius, 0, 1, 0, radius * 2, 0).a(radius, radius, 0, 1, 0, -(radius * 2), 0);
    const node = p.toElement({
      class: "circle-node"
    });
    node.onclick = alert.bind(null, msg);
    return node;
  };
  var DagNodes = () => {
    const createConnectors = () => {
      const {edges} = dag3;
      const p = new L();
      edges.forEach(({points, x, y}) => {
        const m = points.shift();
        p.M(m.x, m.y);
        points.forEach((point) => p.L(point.x, point.y));
      });
      return p.toElement({stroke: "#222"});
    };
    const squares = dag3.nodes.slice(0, 5);
    const circles = dag3.nodes.slice(5);
    const squareNodes = squares.map(({x, y, width}, index) => square(x - width / 2, y - width / 2, width, `clicked node #${index}`));
    const circleNodes = circles.map(({x, y, width}, index) => circle(x, y, width / 2, `clicked node #${index}`));
    return {
      connectors: createConnectors(),
      nodes: squareNodes.concat(circleNodes),
      w: dag3.graph.width,
      h: dag3.graph.height
    };
  };
  var dagNodes_default = DagNodes;

  // src/helpers/svg.js
  var svg = (width, height) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    el.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return el;
  };
  var g = (width, height) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return el;
  };

  // src/dag/index.js
  var makeDags = () => {
    const dags = [
      {
        fn: dagSinglePath_default,
        el: "one-path"
      },
      {
        fn: dagTwoPaths_default,
        el: "two-paths"
      },
      {
        fn: dagNodes_default,
        el: "dag-nodes"
      }
    ];
    dags.forEach(({el, fn}) => {
      const dag4 = fn();
      const s = svg(dag4.w, dag4.h);
      if (dag4.connectors) {
        s.appendChild(dag4.connectors);
      }
      if (dag4.nodes) {
        if (Array.isArray(dag4.nodes)) {
          const g1 = g();
          dag4.nodes.forEach((node) => g1.appendChild(node));
          s.appendChild(g1);
        } else {
          s.appendChild(dag4.nodes);
        }
      }
      document.getElementById(el).appendChild(s);
    });
  };
  var dag_default = makeDags;

  // src/macros/customMacro.js
  L.macro("squareTest", function(size, x, y) {
    if (x && y) {
      this.M(x, y);
    }
    this.right(size).down(size).left(size).up(size);
    return this;
  });
  L.macro("circleTest", function(radius, x, y) {
    if (x && y) {
      this.M(x, y);
    }
    this.m(-radius, 0).a(radius, radius, 0, 1, 0, -(radius * 2), 0).a(radius, radius, 0, 1, 0, radius * 2, 0);
    return this;
  });
  L.macro("triangleTest", function(w2, h3, x, y) {
    this.M(x, y).l(-w2 / 2, h3).right(w2).L(x, y);
    return this;
  });

  // src/canvas/clock.js
  var degreeToAngle = (value, division, cx, cy, radius) => {
    const degree = 360 / division * value;
    const {x: ex, y: ey} = L.clockwisePoint(cx, cy, radius, degree);
    return {ex, ey};
  };
  var time = () => {
    const d = new Date();
    return {
      second: d.getSeconds(),
      minute: d.getMinutes(),
      hour: d.getHours()
    };
  };
  var clock = (canvas) => {
    const w2 = 250;
    const h3 = 250;
    const cx = w2 / 2;
    const cy = h3 / 2;
    canvas.width = w2;
    canvas.height = h3;
    const ctx = canvas.getContext("2d");
    const clockSize = 240;
    const clockRadius = clockSize / 2;
    const animate = () => {
      ctx.clearRect(0, 0, w2, h3);
      const c = new L().circle(clockSize, w2 / 2, h3 / 2).toString();
      ctx.strokeStyle = "black";
      ctx.stroke(new Path2D(c));
      const r1 = new L().radialLines(clockSize, clockSize * 0.9, 12, cx, cy).toString();
      ctx.stroke(new Path2D(r1));
      const r2 = new L().radialLines(clockSize, clockSize * 0.95, 60, cx, cy).toString();
      ctx.stroke(new Path2D(r2));
      const hourEnd = degreeToAngle(time().hour, 12, cx, cy, clockRadius * 0.5);
      const hourHand = new L().M(cx, cy).lineTo(hourEnd.ex, hourEnd.ey).toString();
      ctx.strokeStyle = "green";
      ctx.stroke(new Path2D(hourHand));
      const minuteEnd = degreeToAngle(time().minute, 60, cx, cy, clockRadius * 0.75);
      const minuteHand = new L().M(cx, cy).lineTo(minuteEnd.ex, minuteEnd.ey).toString();
      ctx.strokeStyle = "blue";
      ctx.stroke(new Path2D(minuteHand));
      const secondEnd = degreeToAngle(time().second, 60, cx, cy, clockRadius * 0.9);
      const secondHand = new L().M(cx, cy).lineTo(secondEnd.ex, secondEnd.ey).toString();
      ctx.strokeStyle = "red";
      ctx.stroke(new Path2D(secondHand));
      requestAnimationFrame(animate);
    };
    animate();
  };

  // src/index.js
  dag_default();
  clock(document.getElementById("canvas"));
})();
