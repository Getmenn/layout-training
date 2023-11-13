import Canson from '@/shared/assets/images/companies/canson.png';
import Fabriano from '@/shared/assets/images/companies/fabriano.png';
import Hahnemuehle from '@/shared/assets/images/companies/hahnemuehle.png';
import RoyalTalens from '@/shared/assets/images/companies/royalTalens.png';

import s from './companies.module.scss';

const companies = [
    {
        image: Hahnemuehle,
    },
    {
        image: Canson,
    },
    {
        image: RoyalTalens,
    },
    {
        image: Fabriano,
    },
];

const CompanyItem = ({ image }: {image: string}) => {
    return (
        <div className={s.companyItem}>
            <div className={s.imageWrapper}>
                <img src={image} alt="company" />
            </div>
        </div>
    );
};

export const Companies = () => {
    return (
        <div className={s.companies}>
            <div className={s.container}>
                {companies.map((el) => (
                    <CompanyItem image={el.image} />
                ))}
            </div>
        </div>
    );
};
