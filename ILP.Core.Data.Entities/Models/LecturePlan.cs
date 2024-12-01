using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class LecturePlan : IEntity
    {
        [Key, Column("LecturePlanId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Name { get; set; } = null!;
        public ICollection<NoteLecture>? NoteLectures { get; }
        [Required]
        public string GroupId { get; set; } = null!;
        [JsonIgnore]
        public Group? Group { get; set; }
    }
}
