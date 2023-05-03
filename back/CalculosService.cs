using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace back
{
    public class CalculosService:ICalculosService
    {
        public int Sumar(int a, int b)
        {
        
            return a+b;
        }
    }

    public interface ICalculosService
    {
        public int Sumar(int a, int b);
    }
}