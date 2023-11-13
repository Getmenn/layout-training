import classNames from 'classnames';
import { useState } from 'react';

import ExitIcon from '@/shared/assets/svg/exit.svg';
import SearchIcon from '@/shared/assets/svg/search.svg';
import { Logo } from '@/shared/ui/logo/logo';

import s from './header.module.scss';

export const Header = () => {
    const [visibleNav, setVisibleNav] = useState(true);

    return (
        <div className={s.header}>
            <div className={s.container}>
                <Logo className={s.logoWrapper} />
                <div className={classNames(s.navigationWrapper, { [s.active]: !visibleNav })}>
                    <span>Продукция</span>
                    <span>Материалы</span>
                    <span>О нас</span>
                    <span>Контакты</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 20 15"
                    className={classNames(s.burger, { [s.active]: !visibleNav })}
                    onClick={() => setVisibleNav(!visibleNav)}
                >
                    <path
                        fillRule="evenodd"
                        fill="#000"
                        d="M-0.000,-0.000 L17.000,-0.000 L17.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                    />
                    <path
                        fillRule="evenodd"
                        fill="#000"
                        d="M-0.000,7.000 L17.000,7.000 L17.000,8.000 L-0.000,8.000 L-0.000,7.000 Z"
                    />
                    <path
                        fillRule="evenodd"
                        fill="#000"
                        d="M-0.000,14.000 L17.000,14.000 L17.000,15.000 L-0.000,15.000 L-0.000,14.000 Z"
                    />
                </svg>
                <div className={s.icons}>
                    <SearchIcon className={s.searchLogo} />
                    <ExitIcon className={s.exitLogo} />
                </div>
            </div>
        </div>
    );
};
