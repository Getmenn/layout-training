import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

import s from './title.module.scss';

interface IProps{
    className?: string;
    size?: 'big' | 'standard' | 'small' | 'smaller' ;
    children?: ReactNode;
}

export const Title = ({
    className,
    children,
    size = 'big',
    ...anyProps
}: IProps & HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 className={classNames(className, s.title, s[size])} {...anyProps}>
            {children && children}
        </h1>
    );
};
