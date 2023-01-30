import Link from '@mui/material/Link';

export function Header({ title }) {
    return <>
        <header>
            <h1>
                <Link href="/" color="inherit">{title}</Link>
            </h1>
        </header>
    </>;
}
