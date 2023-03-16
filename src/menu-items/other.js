// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="Dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: <FormattedMessage id="sample-page" />,
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: <FormattedMessage id="documentation" />,
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        },
        {
            id: 'roadmap',
            title: <FormattedMessage id="roadmap" />,
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/roadmap',
            icon: icons.IconSitemap,
            external: true,
            target: true
        }
    ]
};

export default other;
