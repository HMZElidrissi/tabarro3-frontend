"use client";

import { useTranslation } from "@/app/lib/useTranslation";

interface SearchFieldProps {
  onSearch: (search: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    onSearch(search);
  };

  return (
    <div className="w-full text-gray-500 py-6 text-center">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder={t("campaigns.search")}
          className="form-input mr-4"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
