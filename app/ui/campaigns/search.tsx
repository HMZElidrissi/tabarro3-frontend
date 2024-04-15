"use client";
import { searchCampaigns } from "@/app/lib/data";
import { Campaign } from "@/app/lib/definitions";

interface SearchFieldProps {
  setCampaigns: (campaigns: Campaign[]) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ setCampaigns }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const campaigns = await searchCampaigns(search);
    setCampaigns(campaigns);
  };
  return (
    <div className="w-full text-gray-500 py-6 text-center">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search campaigns ..."
          className="form-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
