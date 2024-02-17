import { ImageCharacter, NotFoundResults } from "@/components";
import { getCharactersById } from "@/lib/services";

export const DetailCharacter = async (props: { id: String }) => {
  const { id } = props;

  const result = await getCharactersById(id);

  if (!result?.character) return <NotFoundResults />;

  const { gender, image, name, species, status } = result.character;

  return (
    <section className="flex flex-col gap-5">
      <header className="flex flex-col gap-2">
        <ImageCharacter id={id} image={image} name={name} />
        <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>
      </header>
      <ul role="list" className="divide-y divide-slate-200">
        <CardDetail label="Specie" value={species} />
        <CardDetail label="Status" value={status} />
        <CardDetail label="Gender" value={gender} />
      </ul>
    </section>
  );
};

type CardDetailTpe = {
  label: string;
  value: string;
};
const CardDetail = ({ label, value }: CardDetailTpe) => (
  <li className="py-3 flex flex-col">
    <span className="font-semibold text-base">{label}</span>
    <span className="font-medium text-base text-gray-500">{value}</span>
  </li>
);
