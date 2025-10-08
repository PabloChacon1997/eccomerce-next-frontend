import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination as PaginationSU } from 'semantic-ui-react'

import styles from './Pagination.module.scss'


export function Pagination(props) {
  const { currentPage, totalPages } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const onPageChange = (_,data) => {
    const { activePage } = data;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', activePage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className={styles.container}>
      <PaginationSU defaultActivePage={currentPage} totalPages={totalPages} ellipsisItem={null} firstItem={null} lastItem={null} onPageChange={onPageChange} />
    </div>
  )
}
