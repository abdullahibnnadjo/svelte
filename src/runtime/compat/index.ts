import CompatMap from 'core-js-pure/stable/map';
import CompatPromise from 'core-js-pure/stable/promise';
import CompatSet from 'core-js-pure/stable/set';
import CompatSymbol from 'core-js-pure/stable/symbol';

// polyfills for runtime
import 'core-js/modules/es.object.keys'; //dev.ts
import 'core-js/modules/es.string.starts-with';
import 'core-js/modules/es.array.fill';
import 'core-js/modules/es.array.from'; 
import 'core-js/modules/es.array.sort';

import 'core-js/modules/es.typed-array.int32-array.js'; //dom.ts

// Be sure to avoid for(x of y) syntax

export { CompatMap, CompatPromise, CompatSet, CompatSymbol };
