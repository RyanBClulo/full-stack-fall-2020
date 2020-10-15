namespace Emailer.Repos
{
    public interface ICustomerRepository
    {
        void Create(Customer c);
        Customer Read(string id);
        void Delete(string id);
    }
}