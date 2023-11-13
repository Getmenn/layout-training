import classNames from 'classnames';
import { CSSProperties } from 'react';

import ArrowIcon from '@/shared/assets/svg/arrow.svg';
import { Title } from '@/shared/ui/title/title';

import s from './productItem.module.scss';

interface IProps {
    image: string;
    title: string;
    total: string;
    description: string;
    className: string;
    styleImage?: CSSProperties | undefined;
}

export const ProductItem = ({
    image,
    title,
    total,
    description,
    styleImage,
    className,
}: IProps) => {
    return (
        <div className={classNames(s.productItem, className)}>
            <div className={s.imageWrapper}>
                <img src={image} style={styleImage} alt="product" />
            </div>
            <Title size="small" className={s.title}>
                {title}
            </Title>
            <span className={s.total}>
                Тираж: от {total} штук
            </span>
            <p className={s.description}>
                {description}
            </p>
            <button type="button">
                Подробнее <ArrowIcon />
            </button>
        </div>
    );
};
