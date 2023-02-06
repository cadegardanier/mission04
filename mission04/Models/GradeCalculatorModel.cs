using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace mission04.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0,100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Groupprojects { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public int Final { get; set; }




    }
}
