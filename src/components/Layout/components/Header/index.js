import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippys from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(style);

const Uploadicon = { icon: <UploadIcon /> };

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'Vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên máy tính',
    },
];

function Header() {
    const currentUser = true;

    const handleManuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/signout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippys>
                                <Button leftIcon={Uploadicon.icon} secondary>
                                    Tải lên
                                </Button>
                            </Tippys>
                            <Tippys delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippys>
                            <Tippys delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippys>
                        </>
                    ) : (
                        <>
                            <Button text>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleManuChange}>
                        {currentUser ? (
                            <Image
                                src="hhttps://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/8656715c6e531b0aa6bcf35694991afe~c5_100x100.jpeg?x-expires=1695038400&x-signature=xof2%2FSu8CKUILXhPzqezLbwYsfo%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
