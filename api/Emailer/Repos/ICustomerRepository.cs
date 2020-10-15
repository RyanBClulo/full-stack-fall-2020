namespace Emailer.Repos
{
    /**
     * TODO make this a generic repository
     * TODO Use Async
     */
    public interface ICustomerRepository
    {
        void Create(Customer c);
        Customer Read(string id);
        void Delete(string id);
    }
}