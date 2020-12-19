using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prova_4.Services
{
    public class Settings
    {
        public string Secret { get; set; }
        public int ExpirationTime { get; set; }
        public string Emissor { get; set; }
        public string ValidoEm { get; set; }
    }
}
