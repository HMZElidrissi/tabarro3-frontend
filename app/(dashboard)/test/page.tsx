import { Dialog } from "@/app/ui/components/dialog";
import EditOrganizationDialog from "@/app/ui/organizations/EditOrganizationDialog";
import DeleteOrganizationDialog from "@/app/ui/organizations/DeleteOrganizationDialog";
import { fetchOrganizations } from "@/app/lib/data";
import { Organization } from "@/app/lib/definitions";
import CreateOrganizationDialog from "@/app/ui/organizations/CreateOrganizationDialog";

const OrganizationsPage = async () => {
  const organizations: Organization[] = await fetchOrganizations();

  return (
    <div className="sm:overflow-hidden flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <CreateOrganizationDialog />
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  City
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th scope="col" className="sr-only">
                  Actions
                </th>
              </tr>
              </thead>
              <tbody>
              {organizations.map((organization, organizationIdx) => (
                <tr
                  key={organization.id}
                  className={
                    organizationIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {organization.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {organization.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {organization.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {organization.phone}
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <div className="flex items-center">
                      <EditOrganizationDialog organization={organization} />
                      <span className="mx-2"></span>
                      <DeleteOrganizationDialog organization={organization} />
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            <Dialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsPage;

