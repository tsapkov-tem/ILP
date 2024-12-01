using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ILP.Core.Data.Entities.Models
{
    public class NoteLecture : IEntity
    {
        [Key, Column("NoteLectureId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Title { get; set; } = null!;
        public string Description { get; set; } = string.Empty;
        [Required]
        public DateTime DateStart { get; set; }
        [Required]
        public string UserId { get; set; } = null!;
        public User? User { get; set; }
        [Required]
        public string LecturePlanId { get; set; } = null!;
        public LecturePlan? LecturePlan { get; set; }
    }
}
