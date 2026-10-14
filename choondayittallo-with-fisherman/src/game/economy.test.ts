import { describe,it,expect } from 'vitest';
import { DEFAULT_SAVE,buyGear,sellFish,safeLoad,addCatch } from './economy';
const fresh=()=>structuredClone(DEFAULT_SAVE);
describe('economy and saves',()=>{
 it('charges for equipment and prevents duplicate purchases',()=>{const a=buyGear(fresh(),'fiberglass');expect(a.ok).toBe(true);expect(a.save.money).toBe(180);const b=buyGear({...a.save,money:600},'fiberglass');expect(b.ok).toBe(false);});
 it('sells selected fish once and credits proceeds',()=>{const a=addCatch(fresh(),'tilapia',1);const uid=a.inventory[0].uid;const sold=sellFish(a,[uid]);expect(sold.sold).toBe(1);expect(sold.save.inventory).toHaveLength(0);const again=sellFish(sold.save,[uid]);expect(again.earned).toBe(0);});
 it('recovers from corrupt save data',()=>{expect(safeLoad('{bad').money).toBe(180);expect(safeLoad(null).version).toBe(1);});
 it('keeps a catch in inventory and journal',()=>{const a=addCatch(fresh(),'karimeen',.7);expect(a.inventory).toHaveLength(1);expect(a.journal).toContain('karimeen');expect(a.totalCaught).toBe(1);});
});
