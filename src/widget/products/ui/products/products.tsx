import ProductFirst from '@/shared/assets/images/products/product1.jpg';
import ProductSecond from '@/shared/assets/images/products/product2.jpg';
import ProductThird from '@/shared/assets/images/products/product3.jpg';
import ProductFour from '@/shared/assets/images/products/product4.jpg';

import { ProductItem } from '../productItem/productItem';
import s from './products.module.scss';

const products = [
    {
        image: ProductFirst,
        title: 'Упаковка',
        total: '50',
        description: 'Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.',
    },
    {
        image: ProductSecond,
        title: 'Пакеты',
        total: '200',
        description: 'С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.',
        // styleImage: { width: '90%' },
    },
    {
        image: ProductThird,
        title: 'Кейсы',
        total: '30',
        description: 'Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.',
        // styleImage: { right: 0, left: 'unset', transform: 'unset' },
    },
    {
        image: ProductFour,
        title: 'Другие изделия',
        total: '100',
        description: 'Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.',
    },
];

export const Products = () => {
    return (
        <div className={s.products}>
            <div className={s.container}>
                {products.map((item) => (
                    <ProductItem
                        image={item.image}
                        title={item.title}
                        total={item.total}
                        description={item.description}
                        // styleImage={item.styleImage}
                        className={s.productItem}
                    />
                ))}
            </div>
        </div>
    );
};
