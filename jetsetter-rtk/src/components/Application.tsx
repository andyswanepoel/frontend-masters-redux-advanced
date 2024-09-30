import { useGetItemsQuery } from '../services/apiService';
import Header from './Header';
import ItemList from './ItemList';
import MarkAllAsUnpacked from './MarkAllAsUnpacked';
import NewItem from './NewItem';

const Application = () => {
  const { data, isLoading } = useGetItemsQuery(undefined, {});

  const items = data?.items || [];

  const packedItems = items.filter((item) => !!item.packed);
  const unpackedItems = items.filter((item) => !item.packed);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header count={0} />
      <NewItem />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="flex flex-col gap-8 md:flex-row">
          <ItemList title="Unpacked Items" items={unpackedItems} />
          <ItemList title="Packed Items" items={packedItems} />
        </section>
      )}
      <MarkAllAsUnpacked />
    </main>
  );
};

export default Application;
