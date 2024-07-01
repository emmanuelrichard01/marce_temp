import Link from 'next/link';
import { FC } from 'react';

interface BreadcrumbPath {
    name: string;
    path: string;
}

interface BreadcrumbProps {
    paths: BreadcrumbPath[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ paths = [{ name: "home", path: "/" }] }) => {
    return (
        <>
            {paths && paths.length > 0 && (
                <div className="breadcrumb-wrapper font-normal text-[13px] text-qblack mb-[23px]">
                    {paths.map((path, index) => (
                        <span key={index}>
                            <Link href={path.path} className="mx-1 capitalize">
                                {path.name}
                            </Link>
                            {index < paths.length - 1 && (
                                <span className="separator">/</span>
                            )}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default Breadcrumb;
