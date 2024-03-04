import { TableRow } from '../../components/tables/table';
import { roleLabels } from '../../utils/texts';
import { User } from '../../utils/types';

export const mapUsers = (users: User[]): TableRow[] =>
  users.map((user: User) => {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      phone: user.phone,
      email: user.email,
      role: roleLabels[user?.role!],
    };
  });
