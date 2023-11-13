import classNames from 'classnames';

import { Title } from '@/shared/ui/title/title';

import s from './resultItem.module.scss';

interface IProps{
    image: string;
    title: string;
    description: string;
}

export const ResultItem = ({
    image,
    title,
    description,
}: IProps) => {
    return (
        <div className={s.resultItem}>
            <img src={image} alt="result img" />
            <div className={s.content}>
                <Title size="smaller">
                    {title}
                </Title>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};
