using NUnit.Framework;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using FluentAssertions;

namespace Emailer.SMTP {
    
    public class _InstallerTests {

        [Test]
        public void Calling_AddSmtp_Registers_ISmtpClient() {
            var sercices  = new ServiceCollection().AddSmtp();
            var registeredService = sercices.FirstOrDefault(s => s.ServiceType ==typeof(ISmtpClient));
            Assert.IsNotNull(registeredService);

            Assert.IsTrue(registeredService.Lifetime == ServiceLifetime.Transient);
            registeredService.Lifetime.Should().Be(ServiceLifetime.Transient); //same as above
        }
    }
}