import * as React from 'react';
import type { IAiSmartHomeWebpartProps } from './IAiSmartHomeWebpartProps';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export default class AiSmartHomeWebpart extends React.Component<IAiSmartHomeWebpartProps, {
    motionData: any[];
    temperatureData: any[];
    securityLogs: any[];
}> {
    constructor(props: IAiSmartHomeWebpartProps);
    componentDidMount(): Promise<void>;
    render(): React.ReactElement<IAiSmartHomeWebpartProps>;
}
//# sourceMappingURL=AiSmartHomeWebpart.d.ts.map