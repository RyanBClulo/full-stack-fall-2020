using MongoDB.Driver;

namespace Emailer.Repos
{
    public class MongoCustomerRepository : ICustomerRepository
    {
        private readonly IMongoCollection<Customer> _collection;

        public MongoCustomerRepository(IMongoDatabase db)
        {
            _collection = db.GetCollection<Customer>("customers");
        }

        public void Create(Customer c)
        {
            _collection.InsertOne(c);
        }

        public Customer Read(string id)
        {
            var filter = Builders<Customer>.Filter.Eq(doc => doc.Id, id);
            return _collection.Find(filter).Single();
        }

        public void Delete(string id)
        {
            var filter = Builders<Customer>.Filter.Eq(doc => doc.Id, id);
            _collection.FindOneAndDelete(filter);
        }
    }
}