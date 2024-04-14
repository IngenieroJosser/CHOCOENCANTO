import '../../style/scss/admin/_recentCustomers.scss'

const RecentCustomers = () => {
    const customers = [
        {
        name: 'Jerry Mattedi',
        orderDate: '13 May, 2021:10:10 AM',
        phoneNumber: '251-461-5362',
        location: 'New York',
        registered: 'Yes',
        details: 'Qationa',
        },

        {
        name: 'Eliana Vasilov',
        orderDate: '18 May, 2021:3:22 PM',
        phoneNumber: '171-534-1262',
        location: 'Ontario',
        registered: 'No',
        details: 'Qations',
        },

        {
        name: 'Alvis Den',
        orderDate: '17 May, 2021:2:15 PM',
        phoneNumber: '974-661-5110',
        location: 'Milan',
        details: 'Details',
        },
        
        {
        name: 'Lisa Shipy',
        orderDate: '23 Apr, 2021:15PM',
        phoneNumber: '541-661-3042',
        location: '1 3 4 5 Octions',
        details: 'San Francisco',
        registered: 'Yes',
        },

        {
        name: 'Josser Cordoba',
        orderDate: '23 Apr, 2023:15PM',
        phoneNumber: '323-284-2193',
        location: 'Quibdó - Chocó - Colombia',
        details: 'Poblado - Flores de Buenaños',
        registered: 'Yes',
        }
    ];

    return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de Pedido</th>
                        <th>Numero de telefono</th>
                        <th>Ubicación</th>
                        <th>Inscrito</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.orderDate}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.location}</td>
                            <td>{customer.registered}</td>
                            <td>{customer.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
};

export default RecentCustomers;