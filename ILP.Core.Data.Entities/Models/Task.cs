using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ILP.Core.Data.Entities.Models
{
    public class Task : IEntity
    {
        [Key, Column("TaskId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public DateTime DateStart { get; set; }
        [Required]
        public DateTime DateEnd { get; set; }
        [Required]
        public bool CanBeLate { get; set; } = true;
        [Required]
        public string StudentId { get; set; } = null!;
        public User? Student { get; set; }
        [Required]
        public string TeacherId { get; set; } = null!;
        public User? Teacher { get; set; }

    }
}
