using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementOfCandidates.Models
{
    public class Candidate
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public int Salary { get; set; }

        [Required]
        public int Experience { get; set; }

        //public DateTime DateTime { get; set; }

        public string Path { get; set; }
    }
}
