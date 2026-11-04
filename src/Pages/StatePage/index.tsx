import { StatePage } from "./StatePage";
import { tn } from "./tn";
import { cg } from "./cg";
import { kl } from "./kl";

export const TamilNadu = () => <StatePage data={tn} />;
export const Chhattisgarh = () => <StatePage data={cg} />;
export const Kerala = () => <StatePage data={kl} />;
