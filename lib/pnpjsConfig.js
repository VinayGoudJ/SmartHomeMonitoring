import { spfi } from "@pnp/sp";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var _sp;
export var getSP = function () {
    if (!_sp) {
        _sp = spfi(Web("https://rivieredu.sharepoint.com/sites/mydevsite"));
    }
    return _sp;
};
//# sourceMappingURL=pnpjsConfig.js.map