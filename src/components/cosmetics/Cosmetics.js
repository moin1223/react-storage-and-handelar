import { data } from '../../fakedata'
import Cosmetic from '../cosmetic/Cosmetic';

const Cosmetics = () => {


    return (
        <div>
            {
                data.map(cosmetic=> <Cosmetic cosmetic = {cosmetic} key = {cosmetic.id}></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;