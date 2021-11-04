// /!\ Always import this file by svelte/compat — not relative path — to avoid code duplication when js are generated

// pure ponyfills (do not pollute global namespace)
import CompatMap from 'core-js-pure/stable/map';
import CompatPromise from 'core-js-pure/stable/promise';
import CompatSet from 'core-js-pure/stable/set';
import CompatSymbol from 'core-js-pure/stable/symbol';

import _requestAnimationFrame from 'raf'; // environment.ts
import performanceNow from 'performance-now';

// global polyfills for runtime
import 'core-js/modules/es.object.keys'; //dev.ts
import 'core-js/modules/es.string.starts-with';
import 'core-js/modules/es.array.fill';
import 'core-js/modules/es.array.from';
import 'core-js/modules/es.array.sort';
import 'core-js/modules/es.typed-array.int32-array.js'; //dom.ts

// Note: Be sure to avoid for(x of y) syntax

const PerfCompat = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    now: performanceNow
}; 

const Raf = {
    requestAnimationFrame: (cb) => {    
        if (typeof window !== 'object') {
            // noop, we’re server side
            return;
        }

        //@ts-ignore window is checked
        if (typeof window.requestAnimiationFrame === 'function') {
            return window.requestAnimationFrame(cb);
        }
        return _requestAnimationFrame(cb);
    }
};

export { CompatMap, CompatPromise, CompatSet, CompatSymbol, PerfCompat, Raf };
