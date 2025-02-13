import { SPFI, spfi } from "@pnp/sp";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

let _sp: SPFI;

export const getSP = (): SPFI => {
    if (!_sp) {
        _sp = spfi(Web("https://rivieredu.sharepoint.com/sites/mydevsite"));
    }
    return _sp;
};
