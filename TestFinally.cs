using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
 
namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("try");
                throw new Exception();
            }
            catch (Exception ex)
            {
                Console.WriteLine("catch");
                throw new Exception();
            }
            finally
            {
                Console.WriteLine("finally");
            }
        }
    }
}