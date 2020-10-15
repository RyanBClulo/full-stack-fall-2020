using System;
using System.Data.Common;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Emailer
{
    public class Customer
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string? Id { get; set; }
        // public ObjectId Id{ get; set; }

        // public DateTime Created => Id.CreationTime;

        public string Name { get; set; } = "";

        public string Email { get; set; } = "";

        public Customer(string id, string name, string email)
        {
            Id = id;
            Name = name;
            Email = email;
        }

        public Customer()
        {
            
        }
    }
}